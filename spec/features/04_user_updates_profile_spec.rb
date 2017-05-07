require 'rails_helper'

feature 'User updates profile' do
  scenario 'user updates successfully' do
    user = create(:user)

    visit root_path
    click_link 'Sign in'

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'

    click_link 'Edit Profile'
    fill_in 'user[current_password]', with: 'newpassword'
    fill_in 'Current password', with: user.password
    click_on 'Update'


    expect(page).to have_content 'Your account has been updated successfully'
  end
  scenario 'user updates successfully' do
    user = create(:user)

    visit root_path
    click_link 'Sign in'

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'

    click_link "Edit Profile"
    fill_in 'Password', with: 'est1234'
    fill_in 'user[current_password]', with: 'newpassword'
    fill_in 'Current password', with: user.password
    click_on 'Update'


    expect(page).to have_content 'Password confirmation doesn\'t match Password'
  end
end
