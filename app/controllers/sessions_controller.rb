class SessionsController < ApplicationController

    def create

        user = User.find_by(username: login_params[:username])
        if !user
            #incorrect username
            #throw error
        end
        user = user.try(:authenticate, login_params[:password])
        if !user
            #throw error if incorrect password
        else
            session[:token] = user.id
            render json: { token: session[:token]}, status: 200
        end
    end

    private
    def login_params
        params.require(:user).permit(:username, :password)
    end
end