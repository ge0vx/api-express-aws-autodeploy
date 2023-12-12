import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    createdAt!: Date;
}