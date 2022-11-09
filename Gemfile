source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }


# Ruby and Rails
ruby "3.1.2"
gem "rails", "~> 7.0.4"
gem "sprockets-rails"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "jbuilder"
gem "redis", "~> 4.0"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem "image_processing", "~> 1.2"

# Turbo
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
# gem "sassc-rails"

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console"
  gem "rack-mini-profiler"
  gem 'rspec-rails'
end

