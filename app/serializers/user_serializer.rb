class UserSerializer < ActiveModel::Serializer
  attributes :name, :username, :email

  has_many :songs
end
