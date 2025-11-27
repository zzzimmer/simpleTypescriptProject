import { Categoria} from "./Categoria";

class Produto{

    private _id : number;
    private _nome : string;
    private _descricao : string;
    private _preco : number;
    private _categoria : Categoria;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(value: number) {
        this._preco = value;
    }

    get categoria(): Categoria {
        return this._categoria;
    }

    set categoria(value: Categoria) {
        this._categoria = value;
    }


    constructor() {
    }
}