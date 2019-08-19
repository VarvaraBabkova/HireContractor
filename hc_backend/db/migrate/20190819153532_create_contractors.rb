class CreateContractors < ActiveRecord::Migration[5.2]
  def change
    create_table :contractors do |t|
    	t.string :name
    	t.integer :price
    	t.string :work
    	t.string :img
    	t.string :intro
    	t.integer :category_id

      t.timestamps
    end
  end
end
