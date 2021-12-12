module Api
  module V1
    class AlbumsController < ApplicationController
      API_URL = "https://jsonplaceholder.typicode.com/".freeze
      HEADERS = { "Accept" => "application/json" }
    
      def index
        albums = HTTParty.get(API_URL + "albums/",  headers: HEADERS)
        users = HTTParty.get(API_URL + "users/", headers: HEADERS)
        albums_arr = albums.to_a
        users_arr = users.to_a
        response = albums_arr.each {|obj| obj["name"] = users_arr[obj["userId"]-1]["name"]}
        render json: response
      end
    
      def show
        album_id = params[:id]
        album_details = HTTParty.get(API_URL + "photos?albumId=" + album_id, headers: HEADERS)
        response = album_details.to_a
        album = HTTParty.get(API_URL + "albums/" + album_id, headers: HEADERS)
        user_id = album.to_h
        user = HTTParty.get(API_URL + "users/" + user_id["userId"].to_s, headers: HEADERS)
        p user.body
        render json: response
      end
    end
  end
end


