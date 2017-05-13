class HomesController < ApplicationController
  before_action :authorize_user, only: [:index]
  def index

  end

  def new
    @home = Home.new
  end

  def create

    if current_user == nil
      flash[:message] = "You need to be signed in to request Admin access."
      redirect_to new_user_session_path
    else
      @home = Home.new(homes_params)
      @home.user_id = current_user.id

      if @home.save

      
        AdminMailer.new_admin(@home)

        flash[:message] = "You're request to become an Admin has succesfully been sent!"
        redirect_to root_path
      else
        flash[:errors] = @home.errors.full_messages.join(', ')
        redirect_to new_home_path
      end
    end

  end

  def authorize_user
   if !user_signed_in? || current_user.admin == false
     redirect_to new_home_path
   end
 end


 private
 def homes_params
   params.require(:home).permit(:name, :body)
 end
end
