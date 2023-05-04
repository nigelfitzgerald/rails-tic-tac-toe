class Game < ApplicationRecord
  belongs_to :user
  validates :win, presence: true
  validates :user, presence: true
end
