class CartSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :quantity, :total
end
