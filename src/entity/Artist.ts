import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm"
import { Track } from "./Track"

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    artist!: string

    @ManyToOne(() => Track, (track) => track.artists)
    @JoinColumn({ name: 'track_id' })
    track!: Track

    @CreateDateColumn()
    createdAt!: Date;
}