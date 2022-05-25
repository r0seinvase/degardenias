    class User < ApplicationRecord
    def has_secure_password
        validates :email, uniqueness: true
        validates :email, :password_digest, presence: true
    end
end
