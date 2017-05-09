class Playlist < ApplicationRecord
before_validation(on: :create)

  validates :name, presence: true
  validates :playlist_id, presence: true
end
