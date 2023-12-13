import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Artist } from "./Artist"

@Entity()
export class Track {
    @PrimaryColumn()
    id!: string;

    @Column()
    isrc!: string;

    @Column()
    title!: string;

    @Column()
    uri!: string;

    @OneToMany(() => Artist, (artist) => artist.track, {
        cascade: true
    })
    artists!: Artist[]

    @CreateDateColumn()
    createdAt!: Date;
}