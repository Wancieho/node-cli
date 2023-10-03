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
  public static description = `Returns a user entry if an ID is specified, otherwise all users are returned`

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

    const { default: User } = await import('App/Models/User')

    if (this.findById) {
      const user = await User.findBy('id', this.findById)

      if (user) {
        response = JSON.stringify(user)
      }

      if (!user) {
        response = 'No user found with that ID'
      }
    }

    if (!response) {
      response = JSON.stringify(await User.all())
    }

    this.logger.info(response)
  }
}
