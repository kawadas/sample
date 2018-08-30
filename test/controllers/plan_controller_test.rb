require 'test_helper'

class PlanControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get plan_home_url
    assert_response :success
  end

end
