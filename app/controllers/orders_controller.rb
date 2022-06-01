class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]
  skip_before_action :authorized


  def neworder
    product_1 = Product.find(order_params[:product_id])
    quantity_1 = order_params[:quantity]

    order = Order.create(user_id: order_params[:user_id] )
    order_items = OrderItem.create(order_id: order.id, product_id: order_params[:product_id], quantity: order_params[:quantity], item_price: product_1.price_in_cents * quantity_1)
    user = User.find(order_params[:user_id])
    user.update(current_order: order.id )
    order_items = order.order_items
end

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:user_id, :order_item_id)
    end
end
