class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
    	t.integer :client_id
    	t.integer :contractor_id
    	t.datetime :date
    	t.string :review
    	t.integer :rating
      t.timestamps
    end
  end
end
