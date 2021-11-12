import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import { v4 as uuid} from 'uuid'
import { CreateComplimentController } from '../controllers/CreateComplimentController'
import { Tag } from './Tag'
import { User } from './User'

export interface CreateCompliment {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export interface RequestCreteCompliment extends Omit<CreateCompliment, 'user_sender'> {}



@Entity('compliment', { schema: 'valoriza_db'})
export class Compliment {

  @PrimaryColumn({ type: 'uuid'})
  readonly id: string

  @Column({ type: 'char', length: 36, nullable: true})
  user_sender: string

  @JoinColumn({ name: 'user_sender'})
  @ManyToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL'
  })
  userSender: User

  @Column({ type: 'char', length: 36, nullable: true})
  user_receiver: string

  @JoinColumn({ name: 'user_receiver'})
  @ManyToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL'
  })
  userReceiver: User

  @Column({ type: 'char', length: 36, nullable: true})
  tag_id: string

  @JoinColumn({ name: 'tag_id'})
  @ManyToOne(() => Tag, {
    nullable: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL'
  })
  tag: Tag

  @Column({ type: 'text'})
  message: string

  @Column({
    type: 'timestamp',
    default: () => 'current_timestamp'
  })
  createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}