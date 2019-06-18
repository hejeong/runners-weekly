class PostsController < ApplicationController

    def index
        @posts = Post.all
        render json: { posts: @posts }, status: :accepted
    end
   
    def show
        @post = Post.find(params[:id])
        render json: { post: @post }, status: :ok
    end
end
