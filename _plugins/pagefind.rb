# frozen_string_literal: true

Jekyll::Hooks.register :site, :post_write do |site|
  Jekyll.logger.info "Pagefind:", "Indexing search"
  next if system("npx", "--yes", "pagefind@1.5.2", "--site", site.dest)

  raise Jekyll::Errors::FatalException,
        "Search indexing failed; ensure Node.js and npm are installed."
end
