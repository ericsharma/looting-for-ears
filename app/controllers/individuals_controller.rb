class IndividualsController < ApplicationController
  def index

  end

  def show
  end

  def edit
    @individual = Individual.find(params[:id])

  end

  def update
    @individual = Individual.find(params[:id])
    new_individual = @individual.update_attributes(individual_params)
    render :show

  end

  def destroy
    @individual = Individual.find(params[:id])
    @individual.destroy
    redirect_to individuals_path
  end

  private
  def individual_params
    params.require(:individual).permit(:name, :first_song, :list)
  end
end
