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
* Navigate to `localhost:5000/customers` and type in some customer's name to search in. You should see the macthing results.

## Customer data

### Populate  customer data

To populate some test data, execute `bundle exec rails db:seed`.
For more details, see `seeds.rb`.

### Display customers

Navigate to `localhost:5000/customers` and type in some name to filter available customers.

### Running `customer_search_spec` (WIP)

There is still an issue with populating the materialized view (see discussions with the author [here](https://forums.pragprog.com/forums/448/topics/14835#41965).

So before running the feature specs, populate the test database __customer_details__ view as follows:
```
RAILS_ENV=test bundle exec rails dbconsole # note we are using test env
```
then
```
shine_test=# refresh materialized view customer_details;
```

Now all the test should pass.
