import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: 17,
        name: 'Piet',
        email: 'piet@gmail.com',
      },
      {
        id: 23,
        name: 'Gert',
        email: 'gert@yahoo.co.uk',
      },
    ])
  }
}
