class Api::V1::UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index


    render json: current_user
  end



end