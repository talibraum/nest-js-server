import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('more_events')
export class Event {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @PrimaryColumn({ type: 'bigint',nullable: false })
  event_date: number;

  @Column({ type: 'text', nullable: false })
  event_name: string;

  @Column({ type: 'text', nullable: false })
  event_address: string;

  @Column({ type: 'text', nullable: false })
  event_desc: string;
}
