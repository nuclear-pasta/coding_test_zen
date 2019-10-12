class Employee < ApplicationRecord
  validates :name, presence: true
  validates :name, format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }
  attribute :name
end
