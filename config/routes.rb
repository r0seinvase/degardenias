Rails.application.routes.draw do
  

  resources :users, only: [:index, :show, :create, :update, :destroy]

  get '/authorize_user', to: 'users#show'
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
end





