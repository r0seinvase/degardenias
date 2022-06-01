class AddAisleIdToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :aisle_id, :string
    add_index :items, :aisle_id
  end
end
