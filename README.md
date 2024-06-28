# Recipe Finder

This app find recipes by having users list ingredients they might have at home.

![Screenshot 2024-06-28 162348](https://github.com/fadelardi/recipe-app/assets/29372822/38bb5ec6-63d0-4948-9475-ed508acb793e)

## UX Considerations

- Make app easier by providing "groups" of foods (like beef, chicken, etc).
- Provide tooltips to avoid confusion and encourage exploration:
![Screenshot 2024-06-28 162455](https://github.com/fadelardi/recipe-app/assets/29372822/993fae8c-d7ee-4077-8dbe-8351962a3ff5)
- Use friendly, informal language, and personal pronouns to feel the user welcome:
![Screenshot 2024-06-28 162428](https://github.com/fadelardi/recipe-app/assets/29372822/1d4a3fa2-9cd0-4fb0-a6d0-7a69a4f619dd)

## How to Run Locally

- Check out code. Create PG database.
- Name DB "recipe_app" and create user recipe with password recipe (or change in `database.yml`)
- Use Rake task `import_recipes_json[./recipe-data-sample.json]` to populate db (data not supplied in repo).
