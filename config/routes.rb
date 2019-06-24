Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    resources :users, only: [:create]
    get '/profile/:username' => 'users#show'
    post '/login' => 'auth#create'
    post '/logout' => 'auth#delete'
    resources :posts, only: [:create, :index, :show]
  end
  
end
