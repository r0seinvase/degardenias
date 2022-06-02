class AddCartIdAttributeToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :cart_id, :integer
  end
end
