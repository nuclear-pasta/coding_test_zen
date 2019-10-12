Rails.application.routes.draw do
  resource :employee, only: :show
end
