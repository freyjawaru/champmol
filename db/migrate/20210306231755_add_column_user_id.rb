class AddColumnUserId < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :user_id, :bigint
  end
end
