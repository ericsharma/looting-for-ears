class Song < ApplicationRecord

belongs_to :user

validates :name, presence: true
validates :youtube_id, presence: true

validates :youtube_id, uniqueness: { scope: :user_id }

end
