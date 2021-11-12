import {
  Entity,
  PrimaryColumn,
  Column
} from 'typeorm'

import { v4 as uuid } from 'uuid'

export interface CreateUser {
  name: string
  email: string
  password: string
  admin?: boolean
}

export interface UpdateUser extends CreateUser {}

@Entity('user', { schema: 'valoriza_db'})
export class User {
  
  @PrimaryColumn({ type: 'uuid' })
  readonly id: string

  @Column({ type: 'varchar', length: 100})
  name: string

  @Column({ type: 'varchar'})
  email: string

  @Column({ type: 'varchar'})
  password: string

  @Column({ type: 'boolean', default: false})
  admin: boolean

  @Column({
    type: 'timestamp',
    default: () => 'current_timestamp'
  })
  createdAt: Date

  @Column({
    type: 'timestamp',
    default: () => 'current_timestamp'
  })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}