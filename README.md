# Node CLI

Built using https://adonisjs.com

## Requirements

- Node
- MySQL

## Usage

- npm i
- node ace migration:fresh
- node ace db:seed
- node ace --help (to get a list of commands)

### Example usage

- node ace book
- node ace book --cobui 23
- node ace user
- node ace user --id 17
- node ace book:checkout 17 --bi 3
- node ace book:check_in --id 3

## Creating CLI commands

https://docs.adonisjs.com/guides/ace-commandline#creating-a-new-command

- node ace make:command Book
- node ace generate:manifest
- node ace user --help (specify the help flag to retrieve info about a command)

### Errors

If you're getting a console error when running a command that uses a model e.g.: `IocLookupException: E_IOC_LOOKUP_FAILED: Cannot resolve "App/Models/Book" namespace from the IoC Container`, you will need to set the `loadApp: true` in your command and then run `node ace generate:manifest`

## Creating models

https://docs.adonisjs.com/guides/models/introduction#creating-your-first-model

- node ace make:model Book (just generate a model)
- node ace make:model Book -m (generate model and migration at same time)

Note: when you modify any models you will manually have to change the related migration as-well.

## Creating migrations

https://docs.adonisjs.com/guides/database/migrations

- node ace make:migration books (generate migration after model created)
- node ace migration:fresh (run every time after creating a mgiration)

## Creating seeds

https://docs.adonisjs.com/guides/database/seeders

- node ace make:seeder Book
- node ace db:seed (run everytime seeds are created or updated)

## What I would change/improve

- Have a UUID field for all database entries and actions, to avoid exposing the primary key publicly
- Store authors in a specific Authors table and have a reference author_id in the Books table
- Store genres in a specific Genres table and create a junction table between Books and Genres so that a book can have many genres
- Limit the fields being returned from the ORM model querying
- Create a books_checked_out_by_user table (or some similar name) instead of just storing the user_id of the user who has the book checked out in the Books table (I am aware this is really bad in a relational DB, but I need a quick working solution). This would potentially make the Book `status` field redundant, so I have also replaced it with `checked_out_by_user_id/checkedOutByUserId`
- I didn't handle unique and not null fields as I need to do more research on the library (models/migrations etc.)
- User login/auth so that the UUID can be returned to use for subsequent requests (user actions against books etc.)
- Get rid of :any in the command querying, but would need to understand the ORM better
- I'd consider converting the Book command verifyUser() to a utility
- Improve the logic of the queries folder so that any REST calls can re-use
- history of checking books in/out
