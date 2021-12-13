class Photo < ActiveRestClient::Base
    get :all, "albums/:id/photos"
end