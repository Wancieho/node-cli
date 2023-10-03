import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class extends BaseSeeder {
  public async run() {
    await Book.createMany([
      {
        title: 'virk@adonisjs.com',
        author: 'secret',
      },
      {
        title: 'romain@adonisjs.com',
        author: 'supersecret',
      },
    ])
  }
}
