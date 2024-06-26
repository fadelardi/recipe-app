class RecipesController < ApplicationController
  def index
    @recipes = []
    @ingredients = search_params[:ingredient_list] || [] 

    if !@ingredients.nil? && @ingredients.length > 0
      @recipes = Recipe
        .where(id: Ingredient.select("recipe_id").where(name: @ingredients))
        
      if @recipes.length == 0
        render "recipes/no_results"
      end 
    end
  end

  private
    def search_params
      params.permit(:ingredient_list => [])
    end
end
