# CAV 2027 website

This repository contains the Jekyll site for CAV 2027. It keeps the Jekyll/Beautiful Jekyll hosting structure. Styles are authored in `assets/css/site.scss` and `_sass/site/`, and Jekyll compiles them to `assets/css/site.css`.

Runtime assets are served locally. Bootstrap, Font Awesome, and generated font-face CSS live under `assets/css/vendor/`; Bootstrap JavaScript lives under `assets/js/vendor/`; font files live under `assets/fonts/`.

## Local setup

Use Ruby 3.3 or newer. On macOS, make sure a current Ruby from Homebrew, asdf, rbenv, or a similar tool appears before `/usr/bin` on `PATH`; the system Ruby is too old for this setup.

Install Ruby dependencies:

```sh
bundle install
```

Build the site, including future-dated content:

```sh
bundle exec jekyll build --future
```

Serve locally:

```sh
bundle exec jekyll serve --future
```

The local server is usually available at `http://127.0.0.1:4000/2027/`.

## Content

Conference metadata lives in `_data/conference.yml`.

Organizer roles and chair links live in `_data/organizers.yml`; the organization page renders directly from that data.

Public conference pages live under `pages/` and use explicit permalinks so URLs such as `/cfp/`, `/organization/`, `/contact/`, and `/sponsors/` remain stable.

The footer's page-specific update date comes from the latest Git commit that changed the page source. A `last_modified_at` value in a page's front matter can override the generated date when necessary.

## Styling

Shared typography and section spacing live in `_sass/site/_base.scss`. Components own their layout and appearance; `_responsive.scss` contains viewport-specific adjustments. Homepage directory links, buttons, and page headers use distinct classes so their styles can be changed independently.

The unclassed-list selectors apply prose spacing to Markdown lists while allowing navigation and organizer lists to define their own layout. Image and menu overflow rules preserve cropping and scrolling; content cards allow text and keyboard focus indicators to remain visible.

## Image credits

`assets/img/kit-royal-tropical-institute.jpg` is a public-domain venue photo by Kmhofmann, sourced from Wikimedia Commons: <https://commons.wikimedia.org/wiki/File:Tropenmuseum_front.jpg>.

## Deployment

The GitHub Actions workflow installs the Gemfile dependencies with Bundler and builds the GitHub Pages artifact with:

```sh
bundle exec jekyll build --future --config _config.yml,_config_ci.yml
```

On pushes to `master`, the generated `_site/` directory is uploaded and deployed to GitHub Pages at <https://conferences.i-cav.org/2027/>.
