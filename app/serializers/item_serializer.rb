class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :object_type, :sold, :price, :decade, :aisle_id, :picture
end
