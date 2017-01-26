Rails.application.routes.draw do
  get 'angular_test/index'

  get 'angular_test_controller/index'

  devise_for :users
  root to: "dashboard#index"

  resources :customers, only: [:index]
  get "angular_test" => "angular_test#index"
end
