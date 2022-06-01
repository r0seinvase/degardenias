class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :user_id
      t.string :order_item_id

      t.timestamps
    end
    add_index :orders, :user_id
    add_index :orders, :order_item_id
  end
end
