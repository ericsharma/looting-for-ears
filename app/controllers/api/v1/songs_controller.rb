class Api::V1::SongsController < ApplicationController
  skip_before_filter :verify_authenticity_token


  def create
    body = request.body.read
    parsed = JSON.parse(body)
    song = Song.new(parsed)
  
    song.user_id = current_user.id


    if song.save
      flash[:success] = "View profile to see your newly saved song!"
    else
       flash[:errors] = song.errors.full_messages.join(',')

    end

  end

end
