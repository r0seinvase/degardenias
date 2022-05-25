class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :password
end
