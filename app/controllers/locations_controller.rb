class LocationsController < ApplicationController
  before_action :set_location, only: :show
  before_action :authorize_request, except: [:index, :show]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /locations
  def index
    @locations = Location.all

    render json: @locations
  end

  # GET /locations/1
  def show
    render json: @location, include: :items
  end

  # POST /locations
  def create
    @location = Location.new(location_params)
    @location.user = @current_user
    if @location.save
      render json: @location, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  def update
    @location = @current_user.locations.find(params[:id])
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE /locations/1
  def destroy
    @location = @current_user.locations.find(params[:id])
    @location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def location_params
      params.require(:location).permit(:title, :description, :repository)
    end
end
