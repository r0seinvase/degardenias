class AddDecadeToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :decade, :string
  end
end
