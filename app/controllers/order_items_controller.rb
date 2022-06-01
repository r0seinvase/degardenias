class OrderItemsController < ApplicationController
  before_action :set_order_item, only: [:show, :update, :destroy]
  skip_before_action :authorized
  # GET /order_items
  def index
    @order_items = OrderItem.all

    render json: @order_items
  end

  # GET /order_items/1
  def show
    render json: @order_item
  end

  # POST /order_items
  def create
    order = Order.find(order_item_params[:order_id])
    order_items = order.order_items

    found_item = order_items.detect do |item| 
    order_item_params[:product_id] == item.product_id
    end
    if found_item
        found_item.quantity += order_item_params[:quantity].to_i
        found_item.item_price = found_item.quantity * found_item.product.price_in_cents
        found_item.save
    else
        orderItem = OrderItem.create(order_item_params)
        orderItem.item_price = orderItem.quantity * orderItem.product.price_in_cents
        orderItem.save
    end
end
end
    

  # PATCH/PUT /order_items/1
  def update
    if @order_item.update(order_item_params)
      render json: @order_item
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_items/1
  def destroy
    @order_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_item
      @order_item = OrderItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_item_params
      params.require(:order_item).permit(:order_id, :item_id)
    end
end
