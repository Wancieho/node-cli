import { BaseCommand, flags } from '@adonisjs/core/build/standalone'

export default class User extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'user'

  @flags.number({ alias: 'fbi', description: 'Find a user by ID' })
  public findById: boolean

  /**
   * Command description is displayed in the "help" output
   */
  public static description = `Returns a user entry if an ID is specified. If no flag/ID is specified then all users will be returned`

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
    let response: any = null
    let query: any = null

    const { default: Users } = await import('App/Models/User')

    if (this.findById) {
      query = await Users.findBy('id', this.findById)

      if (query) {
        response = JSON.stringify(query)
      }

      if (!query) {
        response = 'No user found with that ID'
      }
    }

    if (!response) {
      response = JSON.stringify(await Users.all())
    }

    this.logger.info(response)
  }
}
