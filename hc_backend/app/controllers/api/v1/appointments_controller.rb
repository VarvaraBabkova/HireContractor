class Api::V1::AppointmentsController < ApplicationController

	def index
		@appointments = Appointment.all

    	render json: @appointments
	end

  def create
    @app = Appointment.new(entry_params)

    if @app.save
      render json: @app, status: :created, location: @app
    else
      render json: @app.errors, status: :unprocessable_entity
    end
  end

  private
  def entry_params
      params.require(:appointment).permit(:client_id, :contractor_id, :date)
   end

end
