class Api::V1::UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    user = User.find(current_user.id)


    render json: user
  end



end
