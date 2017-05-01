FactoryGirl.define do
  factory :user do
    sequence(:first_name) { |n| "Frank #{n}" }
    sequence(:last_name) { |n| "Tank #{n}" }
    sequence(:username) { |n| "frankthetank#{n}" }
    sequence(:email) { |n| "frank#{n}@thetank.com" }
    password 'password'

  end
end
