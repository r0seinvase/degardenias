Rails.application.routes.draw do
  

  resources :aisles, only: [:index, :show]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/authorize_user', to: 'users#show'
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
  get '/items', to: 'items#index'
  get '/aisles', to: 'aisles#index'
  
  get '/aisles/:aisles_id/items', to: 'aisles#items_index'
end 





