class User < ActiveRestClient::Base
  get :all, "/users"
  get :find, "/users/:id"
end
