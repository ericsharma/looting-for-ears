class CreateIndividuals < ActiveRecord::Migration[5.0]
  def change
    create_table :individuals do |t|
      t.string :first_song, null: false
      t.string :list, null: false
      t.string :name, null: false, default: "untitled"

      t.belongs_to :user
    end
  end
end
