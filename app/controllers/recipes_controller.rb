class RecipesController < ApplicationController
  def index
    @ingredients = search_params[:ingredient_list] || [] 
    @category = search_params[:category]
    base_query = nil

    if !@category.nil? && @category.length > 0
      base_query = Recipe.where("category ILIKE ?", "%#{@category}%")  
    end

    if !@ingredients.nil? && @ingredients.length > 0
      base_query = Recipe if base_query.nil?
      base_query = base_query.where(
        id: Ingredient.select("recipe_id").where("name ILIKE ANY ( array[?] )", @ingredients.map{|i| "%#{i}%"})
      )
    end

    @recipes = base_query         

    if @recipes.length == 0
      render "recipes/no_results"
    end 
  end

  private
    def search_params
      params.permit(:category, :ingredient_list => [])
    end
end
