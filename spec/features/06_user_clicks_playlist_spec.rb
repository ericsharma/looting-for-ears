require 'rails_helper'

feature 'User navigates to individual playlist' do


  scenario 'user clicks first curated playlist' do


    visit root_path
    click_link 'Looting For Chill'
    expect(page).to have_content 'moow - hate you'




  end
end
