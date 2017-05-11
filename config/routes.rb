Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:create, :index]
      resources :playlists, only: [:index, :create]
      resources :users, only: [:index, :show]
      resources :individuals, only: [:create, :show]

    end
  end

  root 'homes#index'
  resources :playlists, only: [:index, :show]
  resources :homes, only: [:index]

  resources :favorites, only: [:index]
  resources :individuals, only: [:index, :show]


end
