class SessionsController < ApplicationController

    def create
       
        user = User.find_by!(email: params[:email])
  
        if user&.authenticate(params[:password])
             
            session[:current_user] = user.id
  
            session[:login_attempts] = 0
            render json: user, status: :ok
        else 
            session[:login_attempts] ||=0
  
            session[:login_attempts] +=1
            
            render json: {errors: "Invalid Password or Email"}, status: :unauthorized
        end
    end
  
    def destroy
        session.delete :current_user
    end
  end