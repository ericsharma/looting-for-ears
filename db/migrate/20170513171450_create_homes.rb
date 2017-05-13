class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.string :name, null: false
      t.string :body, null: false

      t.belongs_to :user
    end
  end
end
