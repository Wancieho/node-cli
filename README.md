# Node CLI

Built using https://adonisjs.com

## Usage

### Creating CLI commands

https://docs.adonisjs.com/guides/ace-commandline#creating-a-new-command

- node ace make:command Book
- node ace generate:manifest

#### Errors

If you're getting a console error when running a command that uses a model e.g.: `IocLookupException: E_IOC_LOOKUP_FAILED: Cannot resolve "App/Models/Book" namespace from the IoC Container`, you will need to set the `loadApp: true` in your command and then run `node ace generate:manifest`

### Creating models

https://docs.adonisjs.com/guides/models/introduction#creating-your-first-model

- node ace make:model Book
- node ace make:model Book -m OR node ace make:migration books

Note: when you modify any models you will manually have to change the related migration as-well.

### Run migrations

https://docs.adonisjs.com/guides/database/migrations

- node ace migration:fresh

### Run seeds

https://docs.adonisjs.com/guides/database/seeders

- node ace make:seeder Book
- node ace db:seed

## What I would change/improve

- Have a UUID field for all database entries to avoid exposing the primary key to the end user
- Store authors in a specific Authors table and have a reference author_id in the Books table
- Store genres in a specific Genres table and create a junction table between Books and Genres so that a book can have many genres
- Limit the fields being returned from the ORM model querying
- Create a books_checked_out_by_user table (or some similar name) instead of just storing the user_id of the user who has the book checked out in the Books table (I am aware this is really bad in a relational DB, but I need a quick working solution). This would potentially make the Book `status` field redundant, so I have also replaced it with `checked_out_by_user_id/checkedOutByUserId`
