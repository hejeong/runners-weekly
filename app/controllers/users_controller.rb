class UsersController < ApplicationController
    def create
        @user = User.create(user_params)
        if @user.save
            token = generate_token({id: @user.id})
            response = {
                message: 'User created successfully',
                user: {
                    name: @user.name
                },
                jwt: token
            }
            render json: response, status: :created 
        else
            render json: {errors: @user.errors.full_messages}, status: :bad
        end 
    end

    def show 
        @user = User.find_by({username: params[:username]})
        if @user
            render json: {user: @user}
        else
            render json: {errors: "No user under this alias"}
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