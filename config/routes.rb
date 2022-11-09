# frozen_string_literal: true

Rails.application.routes.draw do
  get 'users/show'
  root 'pages#home'

  devise_for :users
  devise_scope :user do
    get 'users', to: 'devise/sessions#new'
  end

  get 'user/:id', to: 'users#show', as: 'user'
  resources :rooms do
    resources :messages
  end
end
