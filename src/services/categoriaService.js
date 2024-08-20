const model = require('../models/categorias')

const list = async () => {
   const list = await model.findAll()
   return list
}

const listId = async (req) => {
    const list = await model.findByPk(req)
    return list
}

const create = async (req) => {
    await model.create(req)
}

const deletar = async (req) => {
    await model.destroy({where: {id: req}})
}

const update = async (id, data) => {
    await model.update(data, {where: {id: id}})
}

module.exports = {
    list,
    listId,
    create,
    deletar,
    update
}