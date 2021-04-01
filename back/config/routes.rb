Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # ルーティングの記載順注意
      delete '/lists/destroy_all', to: 'lists#destroy_all'
      resources :lists, only: %i[index show create update destroy]
    end
  end
end