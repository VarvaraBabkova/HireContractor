class Api::V1::ContractorsController < ApplicationController
	def index
		@contractors = Contractor.all
		render json: @contractors, only: [:id, :name, :work, :price, :intro, :img, :cat_id], include: :appointments
	end
	def show
		@contractor = Contractor.find(params[:id])
		render json: @contractor, only: [:id, :name, :work, :price, :intro, :img, :cat_id], include: :appointments
	end
end
