class SessionsController < ApplicationController

    def create

        user = User.find_by(username: login_params[:username])
        if(!user){
            #incorrect username
            #throw error
        }
        user = user.try(:authenticate, login_params[:password])
        if !user
            #throw error if incorrect password
        else
            session[:user_id] = user.id
        end
    end

    private
    def login_params
        params.require(:user).permit(:username, :password)
    end
end