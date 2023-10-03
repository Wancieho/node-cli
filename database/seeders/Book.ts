import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class extends BaseSeeder {
  public async run() {
    await Book.createMany([
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publicationYear: 1960,
        genre: 'Bildungsroman',
      },
      {
        title: '1984',
        author: 'George Orwell',
        publicationYear: 1949,
        genre: 'Dystopian',
        checkedOutByUserId: 17,
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publicationYear: 1813,
        genre: 'Romance',
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publicationYear: 1925,
        genre: 'Tragedy',
        checkedOutByUserId: 17,
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        publicationYear: 1951,
        genre: 'Bildungsroman',
        checkedOutByUserId: 23,
      },
    ])
  }
}
