class Contractor < ApplicationRecord
	has_many :appointments
	has_many :clients, through: :appointments
	belongs_to :category
end
