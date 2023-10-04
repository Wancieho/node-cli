import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

import { DateTime } from 'luxon'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public author: string

  @column()
  public publicationYear: number

  @column()
  public genre: string

  @column()
  public checkedOutByUserId: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
