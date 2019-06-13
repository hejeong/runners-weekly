class AuthController < ApplicationController

    def create
        @user = User.find_by(username: params[:user][:username])
        
        if @user && @user.authenticate(params[:user][:password])
            token = generate_token({id: @user.id})
            response = {
                user: {
                    name: @user.name
                },
                jwt: token
            }
            render json: response, status: :authorized
        else
            render json: {
                error: 'Invalid credentials'
            }, status: :unauthorized
        end
    end

end