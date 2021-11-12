import {
  Entity,
  PrimaryColumn,
  Column
} from 'typeorm'

import { v4 as uuid} from 'uuid'

export interface CreateTag {
  name: string
}

export interface UpdateTag extends CreateTag {}


@Entity('tag', { schema: 'valoriza_db'})
export class Tag {

  @PrimaryColumn({ type: 'uuid' })
  readonly id: string

  @Column({ type: 'varchar', length: 40})
  name: string

  @Column({
    type: 'timestamp',
    default: () => 'current_timestamp'
  })
  createdAt: Date

  @Column({
    type: 'timestamp',
    default: () => 'current_timestamp'
  })
  updatedAd: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}