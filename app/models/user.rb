# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :messages, dependent: :destroy
  has_one_attached :avatar

  scope :all_except, ->(user) { where.not(id: user.id) }

  after_create_commit { broadcast_append_to 'users' }
  after_commit :add_default_avatar, on: %i[create update]

  def avatar_thumbnail
    avatar.variant(resize_to_limit: [150, 150]).processed
  end

  def chat_thumbnail
    avatar.variant(resize_to_limit: [50, 50]).processed
  end

  private

  def add_default_avatar
    return if avatar.attached?

    avatar.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_avatar.png')),
                  filename: 'default_avatar.png',
                  content_type: 'image/png')
  end
end
