import { BaseCommand, flags } from '@adonisjs/core/build/standalone'

export default class Book extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'book'

  @flags.number({ alias: 'cobui', description: 'Find all books checked out by user ID' })
  public checkedOutByUserId: boolean

  /**
   * Command description is displayed in the "help" output
   */
  public static description =
    'Returns a list of books checked out by a user if the user ID is specified, otherwise all the books are returned'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  private async verifyUser() {
    const { default: User } = await import('App/Models/User')

    const user = await User.findBy('id', this.checkedOutByUserId)

    if (user) {
      return true
    }

    return false
  }

  public async run() {
    let response: any = null

    const { default: Book } = await import('App/Models/Book')

    if (this.checkedOutByUserId) {
      if (!(await this.verifyUser())) {
        return this.logger.info(`A user with ID ${this.checkedOutByUserId} was not found`)
      }

      const books = await Book.query().where('checked_out_by_user_id', this.checkedOutByUserId)

      if (books) {
        response = JSON.stringify(books)
      }

      if (!books) {
        response = `No books found checked out by user ID ${this.checkedOutByUserId}`
      }
    }

    if (!response) {
      response = JSON.stringify(await Book.all())
    }

    this.logger.info(response)
  }
}
