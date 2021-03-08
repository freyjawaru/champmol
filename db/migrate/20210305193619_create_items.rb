class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.string :users
      t.string :locations
      t.string :DateCreated

      t.timestamps
    end
  end
end
