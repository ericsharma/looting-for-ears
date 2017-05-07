class Song < ApplicationRecord

belongs_to :user

validates :name, presence: true
validates :youtube_id, presence: true


end
