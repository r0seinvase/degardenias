class AddCurrentOrderToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current_order, :integer, 
  end
end
