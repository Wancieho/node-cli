import { BaseCommand, flags } from '@adonisjs/core/build/standalone'

import { checkIn } from 'App/Queries/Book/checkin'

export default class BookCheckIn extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'book:check_in'

  @flags.number({ alias: 'id', description: 'Set book check out by user ID to null' })
  public id: number

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Set a book checkout field back to null'

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
    if (!this.id) {
      return this.logger.info(`A book ID must be set as a flag --id`)
    }

    this.logger.info(await checkIn(this.id))
  }
}
