import {
  Entity,
  PrimaryColumn,
  Column
} from 'typeorm'

import { v4 as uuid} from 'uuid'

@Entity('tag', { schema: 'valoriza_db'})
export class Tag {

  @PrimaryColumn('varchar', { name: 'id', length: 64})
  readonly id: string

  @Column('varchar', { name: 'name', length: 40})
  name: string

  @Column('timestamp', {
    name: 'createdAt',
    default: () => 'current_timestamp'
  })
  createdAt: Date

  @Column('timestamp', {
    name: 'updatedAd',
    default: () => 'current_timestamp'
  })
  updatedAd: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}