class AdminMailer < ApplicationMailer
  def new_admin(admin)
    @home = admin

    mail(
      to: "ericsharma420@gmail.com",
      subject: "#{admin.name} has requested admin access"
    )
  end
end
