# frozen_string_literal: true

require "open3"
require "pathname"
require "time"

module CAV2027
  class GitLastModifiedGenerator < Jekyll::Generator
    priority :low

    def generate(site)
      @source = Pathname.new(site.source).expand_path
      @timestamps = {}
      return unless git_repository?

      pages_and_documents(site).each do |item|
        next if item.data["last_modified_at"]

        relative_path = source_relative_path(item.relative_path)
        next unless relative_path

        timestamp = timestamp_for(relative_path)
        item.data["last_modified_at"] = Time.iso8601(timestamp) unless timestamp.empty?
      rescue ArgumentError
        Jekyll.logger.warn "Last modified:", "Could not parse the Git date for #{relative_path}"
      end
    end

    private

    def pages_and_documents(site)
      site.pages + site.collections.values.flat_map(&:docs)
    end

    def git_repository?
      _output, _error, status = Open3.capture3(
        "git", "-C", @source.to_s, "rev-parse", "--is-inside-work-tree"
      )
      status.success?
    rescue Errno::ENOENT
      false
    end

    def source_relative_path(path)
      candidate = Pathname.new(path.to_s)
      candidate = @source.join(candidate) unless candidate.absolute?
      relative_path = candidate.cleanpath.relative_path_from(@source).to_s

      return if relative_path == ".." || relative_path.start_with?("../")

      relative_path
    rescue ArgumentError
      nil
    end

    def timestamp_for(relative_path)
      @timestamps[relative_path] ||= begin
        output, _error, status = Open3.capture3(
          "git", "-C", @source.to_s,
          "log", "-1", "--follow", "--format=%cI", "--", relative_path
        )
        status.success? ? output.strip : ""
      rescue Errno::ENOENT
        ""
      end
    end
  end
end
