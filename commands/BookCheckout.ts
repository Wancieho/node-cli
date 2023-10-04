import { BaseCommand, args, flags } from '@adonisjs/core/build/standalone'

import { checkout } from 'App/Queries/Book/checkouts'

export default class BookCheckout extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'book:checkout'

  @flags.number({ alias: 'bi', description: 'Retrieve book data' })
  public bookId: number

  @args.string({ description: 'User ID' })
  public userId: string

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Attempt to checkout a book using a user ID'

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

  public async run() {
    if (!this.bookId) {
      return this.logger.info(`A book ID must be set as a flag --bi or --bookId`)
    }

    this.logger.info(await checkout(this.bookId, Number(this.userId)))
  }
}
