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
