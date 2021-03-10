class RemoveLocationsFromItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :items, :locations, :string
  end
end
