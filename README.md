# Shine

Shine is the application built when reading [Rails, Angular, Postgres and Bootstrap](https://pragprog.com/book/dcbang2/rails-angular-postgres-and-bootstrap-second-edition) by Pragmatic Programmers (since it allows our great customer service to shine through to our customers).

***

## Used tools

* Rails 5.0.1
* Ruby 2.4.0
* Devise
* Angular 2
* Postgres
* Foreman
* Faker
* Webpack-rails
* Poltergeist
* RSpec

## Installation

* install Postgres
* Run `bundle install`
* Run `rails db:create`
* Run `rails db:migrate`
* Install `Yarn`
* Run `yarn install`
* Start puma and web server together with foreman: `formeman start`
* Check if everything works as needed by navigating to `localhost:5000`
* Signup

## Customer data

### Populate  customer data

To populate some test data, execute `bundle exec rails db:seed`.
For more details, see `seeds.rb`.

### Display customers

Navigate to `localhost:5000/customers` and type in some name to filter available customers.
