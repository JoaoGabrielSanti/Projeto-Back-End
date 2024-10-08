const service = require('../services/produtoServices')
const list =  async (req,res)=>{
    let list = await service.list()
    res.send(list)
}

const listId = async (req,res) => {
    const list = await service.listId(req.params.id)
    res.send(list)
}

const create = async (req,res) => {
    console.log(req.body)
    await service.create(req.body)
    res.status(201).send(await service.list())
}

const deletar = async (req,res) => {
    console.log(req.params.id)
    await service.deletar(req.params.id)
    res.send(await service.list(),)
}

const update = async (req, res) => {
    await service.update(req.params.id,req.body)
    res.send(await service.list())
}



module.exports = {
    list,
    listId,
    create,
    deletar,
    update
}