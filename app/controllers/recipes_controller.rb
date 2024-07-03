class RecipesController < ApplicationController
  include Pagy::Backend

  def index
    @ingredients = search_params[:ingredient_list] || [] 
    @category = search_params[:category]
    base_query = nil

    puts "cat", @category
    if !@category.nil? && @category.length > 0
      base_query = Recipe.where("category ILIKE ?", "%#{@category}%")  
    end

    if !@ingredients.nil? && @ingredients.length > 0
      base_query = Recipe if base_query.nil?
      base_query = base_query.where(
        id: Ingredient.select("recipe_id").where("name ILIKE ANY ( array[?] )", @ingredients.map{|i| "%#{i}%"})
      )
    end

    if base_query.nil?
      render json: []
    else
      render json: base_query
    end
    # @pagy, @recipes = pagy(base_query)
  end

  def show
    @recipe = Recipe.find(params[:id]) 

    if !@recipe.nil?
      @ingredients = Ingredient.where(recipe_id: @recipe.id) 
    end

    render json: @recipe.attributes.merge(:ingredients => @ingredients).to_json
  end

  private
    def search_params
      params.permit(:category, :ingredient_list => [])
    end
end
