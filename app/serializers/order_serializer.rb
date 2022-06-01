class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_item_id
end
