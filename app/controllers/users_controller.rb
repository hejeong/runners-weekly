class UsersController < ApplicationController
    def create
        user = User.new(user_params)
        if user.valid?
            user.save;
            render json: { success: true }, status: 200
        else
            render json: { :errors => user.errors.full_messages}, status: 403
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :username, :password, :email)
    end
end