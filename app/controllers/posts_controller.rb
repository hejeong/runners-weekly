class PostsController < ApplicationController

    def create
        user = User.find_by({username: params[:username]})
        @post = Post.create({
            title: params[:title], 
            description: params[:description],
            content: params[:content],
            image_url: params[:image_url],
            user_id: user.id
        })

    end 

    def index
        @posts = Post.all
        render json: { posts: @posts }, status: :accepted
    end
   
    def show
        @post = Post.find(params[:id])
        render json: { post: @post }, status: :ok   
    end
end
