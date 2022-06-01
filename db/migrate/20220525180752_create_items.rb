class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :category
      t.string :object_type
      t.boolean :sold
      t.decimal :price, precision: 8, scale: 2

      t.timestamps
    end
  end
end
