require 'rails_helper'

feature 'User navigates through pages' do
  scenario 'user sees nav bar on every page' do
    visit root_path

    expect(page).to have_content 'Curated Playlists'
    expect(page).to have_content 'Personal Playlists'
    expect(page).to have_content 'Submit Playlist'
    expect(page).to have_content 'Sign in'
    expect(page).to have_content 'Join'

    visit new_user_session_path

    expect(page).to have_content 'Curated Playlists'
    expect(page).to have_content 'Personal Playlists'
    expect(page).to have_content 'Submit Playlist'
    expect(page).to have_content 'Sign in'
    expect(page).to have_content 'Join'

    visit new_user_registration_path

    expect(page).to have_content 'Curated Playlists'
    expect(page).to have_content 'Personal Playlists'
    expect(page).to have_content 'Submit Playlist'
    expect(page).to have_content 'Sign in'
    expect(page).to have_content 'Join'
  end
end
