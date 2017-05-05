class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.string :youtube_id, null: false

      t.belongs_to :user
    end
  end
end
