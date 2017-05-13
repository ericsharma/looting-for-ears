class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable


  has_many :songs
  has_many :individuals
  has_many :homes

  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4, maximum: 16 }
  validates :username, format: { with: /\A(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,17}\z/,
    message: "can only contain characters a-z, 0-9, underscores and periods" }

  validates :email, uniqueness: true
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :encrypted_password, length: { minimum: 6 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


   def name
   first_name + " " + last_name
   end
end
