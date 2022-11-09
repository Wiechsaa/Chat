# frozen_string_literal: true

class MessagesController < ApplicationController
  def create
    @message = current_user.messages.create(body: message_params[:body], room_id: params[:room_id])
  end

  private

  def message_params
    params.require(:message).permit(:body, :room_id)
  end
end
