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
    playlistId = params["playlistId"]

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
