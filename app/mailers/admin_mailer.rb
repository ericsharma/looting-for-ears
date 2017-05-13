class AdminMailer < ApplicationMailer
  def new_admin(home)

    @home = home
    
    mail(
      to: "lootingforears@gmail.com",
      subject: "#{home.name} has requested admin access"
    )
  end
end
