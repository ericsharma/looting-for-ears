class Api::V1::SongsController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token



  def create
    body = request.body.read
    parsed = JSON.parse(body)
    song = Song.new(parsed)

    song.user_id = current_user.id


    if song.save
      render json: {message: ["Song has been saved!"]}

    else
       render json: {message: ["You have already liked this song"]}

    end

  end

end
