class Recipe < ApplicationRecord
  has_many :ingredients
  validates :title, presence: true
  validates :cook_time_min, numericality: { only_integer: true }
  validates :prep_time_min, numericality: { only_integer: true }
end
