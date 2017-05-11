class Api::V1::IndividualsController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def index
    if params[:id]
      individual = Individual.find(params[:id])
      respond_with individual
    end
  end




  def create
    body = request.body.read
    parsed = JSON.parse(body)
    binding.pry
    individual = Individual.new(parsed)

    individual.user_id = current_user.id


    if individual.save
      flash[:success] = "View profile to see your newly saved song!"
    else
       flash[:errors] = song.errors.full_messages.join(',')

    end

  end

end
