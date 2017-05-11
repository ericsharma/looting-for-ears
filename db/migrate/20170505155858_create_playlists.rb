class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.string :playlist_id, null: false

      t.belongs_to :user

    end
  end
end
