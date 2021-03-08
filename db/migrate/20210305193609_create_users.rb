class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.string :user_name
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
