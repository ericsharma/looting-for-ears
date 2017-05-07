Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:create, :index]
      resources :playlists, only: [:index]
      resources :users, only: [:index, :show]

    end
  end

  root 'homes#index'
  resources :playlists
  resources :homes
  resources :likes
  resources :favorites
end
