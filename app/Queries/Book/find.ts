import Book from 'App/Models/Book'

export const checkedOutBy = async (userId: number): Promise<Book[] | null> => {
  return await Book.query().where('checked_out_by_user_id', userId)
}
