class Item < ApplicationRecord
    # Rails.application.routes.url_helpers
    belongs_to :aisle
    belongs_to :cart, optional: true

    
end

