class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :item_id
end
