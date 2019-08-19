class Client < ApplicationRecord
	has_many :appointments
	has_many :contractors, through: :appointments
end
