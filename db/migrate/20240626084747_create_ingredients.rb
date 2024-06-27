class CreateIngredients < ActiveRecord::Migration[7.1]
  def change
    create_table :ingredients do |t|
      t.belongs_to :recipe
      t.string :name
      t.timestamps
    end
  end
end
