desc "Imports recipes from JSON file"
task :import_recipes_json, [:json_file] => [:environment] do |task, args|
  json_file = args.json_file
  if json_file.nil?
    puts "JSON file must be passed as argument: import_recipes_json['./my-recipes.json']"
  else
    File.open(json_file, 'r') do |file|
      file.each do |line|
        parsed = JSON.parse line
        total_imported = 0
        total_ingredients = 0
        if parsed.length && parsed.kind_of?(Array)
          parsed.each do | recipe |
            fixed_image = URI.decode_www_form_component(recipe["image"].split("url=", 2).last)
            created_recipe = Recipe.create!(
              title: recipe["title"],
              cook_time_min: recipe["cook_time"],
              prep_time_min: recipe["prep_time"], 
              image: fixed_image,
              category: recipe["category"]
            )

            puts "#{created_recipe.title} added to db. Creating #{recipe['ingredients'].length} ingredients"
            total_imported = total_imported + 1
           

            recipe["ingredients"].each do | ingredient |
              puts "Adding ingredient to db #{ingredient}"
              Ingredient.create!(name: ingredient, recipe_id: created_recipe.id)
              total_ingredients = total_ingredients + 1
            end
          end

          puts "total imported: #{total_imported}"
        else 
          puts "The data passed is not valid JSON or not a JSON array"
        end
      end
    end
  end
end
