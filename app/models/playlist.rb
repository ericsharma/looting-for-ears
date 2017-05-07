class Playlist < ApplicationRecord
  validates :name, presence: true
  validates :playlist_id, presence: true
end
