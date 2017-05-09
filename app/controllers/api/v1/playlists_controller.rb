class Api::V1::PlaylistsController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def index
    if params[:id]
      playlist = Playlist.find(params[:id])
      respond_with playlist
    else
      playlists = Playlist.all
      render json: playlists
    end
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    playlist = Playlist.new(parsed)

    playlist.user_id = current_user.id


    if playlist.save
      binding.pry

      flash[:success] = "Platlist added succsessfully"
    else
       flash[:errors] = playlist.errors.full_messages.join(',')

    end

  end

end
