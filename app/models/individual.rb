class Individual < ApplicationRecord

  belongs_to :user
  validates :name, presence: true
  validates :first_song, presence: true
  validates :list, presence: true


end
