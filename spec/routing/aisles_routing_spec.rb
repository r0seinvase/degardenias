require "rails_helper"

RSpec.describe AislesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/aisles").to route_to("aisles#index")
    end

    it "routes to #show" do
      expect(get: "/aisles/1").to route_to("aisles#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/aisles").to route_to("aisles#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/aisles/1").to route_to("aisles#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/aisles/1").to route_to("aisles#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/aisles/1").to route_to("aisles#destroy", id: "1")
    end
  end
end
