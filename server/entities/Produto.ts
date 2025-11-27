import { Categoria} from "./Categoria";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Produto{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nome : string;

    @Column()
    descricao : string;

    @Column("decimal")
    preco : number;

    @ManyToOne(() => Categoria)
    @JoinColumn({name : 'categoria_id'}) // nome da fk no banco
    categoria : Categoria;

}