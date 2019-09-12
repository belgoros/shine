source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.6.3'

gem 'angular_rails_csrf'
gem 'coffee-rails', '~> 4.2'
gem 'devise', '>= 4.7.1'
gem 'faker'
gem 'foreman'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'pg', '~> 1.1', '>= 1.1.4'
gem 'puma', '~> 4.1', '>= 4.1.1'
gem 'rails', '~> 5.0.1'
gem 'sass-rails', '~> 5.0'
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'uglifier', '>= 1.3.0'
gem 'webpack-rails'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'database_cleaner'
  gem 'poltergeist'
  gem 'rspec-rails', '~> 3.8', '>= 3.8.2'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'listen',      '~> 3.0.5'
  gem 'web-console', '>= 3.3.0'
end
