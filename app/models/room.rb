# frozen_string_literal: true

class Room < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :messages, dependent: :destroy

  scope :public_rooms, -> { where(is_private: false) }

  after_create_commit { broadcast_append_to 'rooms' }
end
