class UsersController < ApplicationController
    def create
        @user = User.create(user_params)
        if @user.save
         response = { message: 'User created successfully'}
         render json: response, status: :created 
        else
         render json: @user.errors, status: :bad
        end 
    end

    def index
        users = User.all
        render json: users
    end
    private
    
    def user_params
        params.require(:user).permit(:name, :username, :password, :email)
    end
end