import {
  Entity,
  PrimaryColumn,
  Column
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('user', { schema: 'valoriza_db'})
export class User {
  
  @PrimaryColumn('varchar', { name: 'id', length: 50})
  readonly id: string

  @Column('varchar', { name: 'name', length: 60})
  name: string

  @Column('varchar', { name: 'email', length: 80})
  email: string

  @Column('varchar', { name: 'password', length: 24})
  password: string

  @Column('boolean', { name: 'admin', default: false})
  admin: boolean

  @Column('timestamp', {
    name: 'createdAt',
    default: () => 'current_timestamp'
  })
  createdAt: Date

  @Column('timestamp', {
    name: 'updatedAt',
    default: () => 'current_timestamp'
  })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}