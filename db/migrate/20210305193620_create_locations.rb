class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :title
      t.string :description
      t.string :repository

      t.timestamps
    end
  end
end
