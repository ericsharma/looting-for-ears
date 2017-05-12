class HomesController < ApplicationController
  before_action :authorize_user, only: [:index]
  def index
  end

  def authorize_user
   if !user_signed_in? || current_user.admin == false
     render :show
   end
 end
end
