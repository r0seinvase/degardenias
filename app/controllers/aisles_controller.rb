class AislesController < ApplicationController
  before_action :set_aisle, only: [:show, :update, :destroy]
  skip_before_action :authorized
  
  # GET /aisles
  def index
    @aisles = Aisle.all

    render json: @aisles
  end

  # GET /aisles/1
  def show
    render json: @aisle
  end

  # POST /aisles
  def create
    @aisle = Aisle.new(aisle_params)

    if @aisle.save
      render json: @aisle, status: :created, location: @aisle
    else
      render json: @aisle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /aisles/1
  def update
    if @aisle.update(aisle_params)
      render json: @aisle
    else
      render json: @aisle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /aisles/1
  def destroy
    @aisle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_aisle
      @aisle = Aisle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def aisle_params
      params.require(:aisle).permit(:name)
    end
end
