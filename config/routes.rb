Rails.application.routes.draw do
  root 'welcome#index'

  get 'news', to: 'welcome#news'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
