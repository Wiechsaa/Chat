# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Ruby and Rails
ruby '3.1.2'
gem 'bootsnap', require: false
gem 'jbuilder'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'rails', '~> 7.0.4'
gem 'redis', '~> 4.0'
gem 'sprockets-rails'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Turbo
gem 'importmap-rails'
gem 'stimulus-rails'
gem 'turbo-rails'
# gem "sassc-rails"

# Files
gem 'image_processing', '~> 1.2'
gem "mini_magick"

gem 'devise'
gem 'rubocop-rails', require: false

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'rack-mini-profiler'
  gem 'rspec-rails'
  gem 'web-console'
end

group :test do
  gem 'shoulda-matchers', '~> 5.0'
end