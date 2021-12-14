class Album < ActiveRestClient::Base
  get :all, "/albums"
  get :find, "/albums/:id", :has_many => { :photos => Photo }, :has_one => { :user => User }
end
