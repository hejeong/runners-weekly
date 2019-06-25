class User < ApplicationRecord
    has_secure_password

    has_many :posts
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    validates :name, presence: true, presence: true

end
