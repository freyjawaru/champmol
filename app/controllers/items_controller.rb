class ItemsController < ApplicationController
  before_action :set_item, only: :show
  before_action :authorize_request, except: [:index, :show]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /items
  def index
    @items = Item.all

    render json: @items
  end

  # GET /items/1
  def show
    render json: @item, include: :items
  end

  # POST /items
  def create
    @item = Item.new(item_params)
    @item.user = @current_user
    if @item.save
      render json: @item, status: :created, item: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    @item = @current_user.items.find(params[:id])
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE /items/1
  def destroy
    @item = @current_user.items.find(params[:id])
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:title, :description, :image_url, :users, :locations, :DateCreated)
    end
end


