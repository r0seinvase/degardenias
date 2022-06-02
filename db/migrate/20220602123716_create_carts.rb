class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :item_id
      t.integer :quantity
      t.integer :total

      t.timestamps
    end
  end
end
