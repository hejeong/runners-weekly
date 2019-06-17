class PostsController < ApplicationController

    def index
        @posts = Post.all
        render json: { posts: @posts }, status: :accepted
    end
    
end
