Rails.application.routes.draw do
  devise_for :users
  root 'playlists#index'
  resources :playlists
end
