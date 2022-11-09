# frozen_string_literal: true

Rails.application.routes.draw do
  get 'users/show'
  root 'pages#home'

  get 'user/:id', to: 'users#show', as: 'user'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :rooms do
    resources :messages
  end
end
