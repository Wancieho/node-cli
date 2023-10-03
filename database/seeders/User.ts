import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Piet',
        email: 'piet@gmail.com',
      },
      {
        name: 'Gert',
        email: 'gert@yahoo.co.uk',
      },
    ])
  }
}
