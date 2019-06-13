class ApplicationController < ActionController::API
    def generate_token(payload)
        JWT.encode(payload, ENV["JWT_TOKEN_SECRET"])
    end

    def decode_for_user_id
        JWT.decode(request.headers["Authorization"]), ENV["JWT_TOKEN_SECRET"])[0]["id"]
    end
end
