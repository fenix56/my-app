module Api
  module V1
    class AlbumsController < ApplicationController
    
      def index
        @albums = Album.all
        @users = User.all
        @albums.each do |album|
          album.user = @users.find { |user| user.id == album.userId }
        end
        render json: @albums
      end
    
      def show
        @album = Album.find(params[:id])
        @album.user = User.find(@album.userId)
        @album.photos = Photo.all(@album.id)
        render json: @album.to_json
      end
    end
  end
end


