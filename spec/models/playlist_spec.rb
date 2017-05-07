RSpec.describe Playlist, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:playlist_id) }


end
