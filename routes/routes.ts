import {Router} from "express";
import {AppDataSource} from "../database/data-source";
import {Produto} from "../server/entities/Produto";
import {Categoria} from "../server/entities/Categoria";

const routes = Router();

// rota para salvar Produto. Endpoint POST no caso
routes.post("/produtos", async (req, res) => {
    // tipo @Autowired para pegar os repositorios pelo que entendi
    const produtoRepo = AppDataSource.getRepository(Produto);
    const categoriaRepo = AppDataSource.getRepository(Categoria);

    //aqui pega o payload da req
    const {nome, descricao, preco, categoriaId} = req.body;

    // encontra a categoria no banco
    const categoria = await categoriaRepo.findOneBy({id : categoriaId});

    // da um retorno caso n tenha a categorai
    if (!categoria){
        return res.status(400).json({message : "Categoria não encontrada"})
    }

    //cria um objeto produto
    const novoProduto = produtoRepo.create({
        nome,
        descricao,
        preco,
        categoria
    })

    await produtoRepo.save(novoProduto);

    return res.status(201).json(novoProduto);
});

routes.get("/produtos", async(req,res)=>{
    const produtoRepo = AppDataSource.getRepository(Produto);

    const produtos = await produtoRepo.find({
        relations: {
            categoria: true
        }
    });
    return res.json(produtos)
});

export default routes;

