import Book from 'App/Models/Book'
import { findById } from '../User/find'

export const byUserId = async (bookId: number, userId: number) => {
  if (!(await findById(Number(userId)))) {
    return `A user with ID ${userId} was not found`
  }

  const book: Book | null = await Book.find(bookId)

  if (!book) {
    return `A book with ID ${bookId} was not found`
  }

  if (book.checkedOutByUserId) {
    return `That book is already checked out`
  }

  book.checkedOutByUserId = userId

  await book.save()

  return JSON.stringify(book)
}
