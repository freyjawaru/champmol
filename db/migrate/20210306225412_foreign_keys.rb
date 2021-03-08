class ForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :user_id, :bigint
    add_column :items, :location_id, :bigint
    rename_column :items, :users, :user_id
    add_foreign_key :items, :locations 
    add_foreign_key :locations, :users
  end
end
