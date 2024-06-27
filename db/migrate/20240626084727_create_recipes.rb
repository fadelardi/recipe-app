class CreateRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :cook_time_min
      t.integer :prep_time_min
      t.string :image
      t.timestamps
    end
  end
end
