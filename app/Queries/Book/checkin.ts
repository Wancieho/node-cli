import Book from 'App/Models/Book'

export const checkIn = async (id: number) => {
  const book: Book | null = await Book.find(id)

  if (!book) {
    return `A book with ID ${id} was not found`
  }

  book.checkedOutByUserId = null

  await book.save()

  return JSON.stringify(book)
}
