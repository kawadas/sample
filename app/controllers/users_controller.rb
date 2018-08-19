class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end
  
  def new
    @user = User.new
  end
  
  def create
       @user = User.new(user_params)   
    if @user.save
      log_in @user
      # 保存の成功をここで扱う。
      flash[:success] = "早く何か作ろうぜ！"
      redirect_to @user
    else
      render 'new'
    end
  end
  
  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
end
