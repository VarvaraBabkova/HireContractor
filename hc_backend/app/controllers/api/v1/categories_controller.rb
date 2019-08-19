class Api::V1::CategoriesController < ApplicationController
	def index
		@categories = Category.all
		render json: @categories, only: [:id, :name], include: :contractors
	end
end
