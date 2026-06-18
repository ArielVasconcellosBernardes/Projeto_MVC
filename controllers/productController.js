const Product = require('../models/productModel');

/**
 * @function list
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para renderizar a view `produtos`.
 * @returns {void}
 */
exports.list = (req, res) => {
    res.render('produtos', { products: Product.getAll(), edit: null });
};

/**
 * @function create
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {{name: string, price: number}} req.body - Corpo da requisição contendo nome e preço do produto.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para redirecionar o cliente para `/produtos`.
 * @returns {void}
 */
exports.create = (req, res) => {
    const { name, price } = req.body;
    Product.create(name, price);
    res.redirect('/produtos');
};

/**
 * @function delete
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {{id: string}} req.params - Parâmetros de rota contendo o ID do produto a ser removido.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para redirecionar o cliente para `/produtos`.
 * @returns {void}
 */
exports.delete = (req, res) => {
    Product.delete(req.params.id);
    res.redirect('/produtos');
};

/**
 * @function editForm
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {{id: string}} req.params - Parâmetros de rota contendo o ID do produto a ser editado.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para renderizar a view `produtos` em modo de edição.
 * @returns {void}
 */
exports.editForm = (req, res) => {
    const product = Product.getById(req.params.id);
    res.render('produtos', {
        products: Product.getAll(),
        edit: product
    });
};

/**
 * @function update
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {{id: string}} req.params - Parâmetros de rota contendo o ID do produto a ser atualizado.
 * @param {{name: string, price: number}} req.body - Corpo da requisição contendo os novos dados do produto.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para redirecionar o cliente para `/produtos`.
 * @returns {void}
 */
exports.update = (req, res) => {
    const { name, price } = req.body;
    Product.update(req.params.id, name, price);
    res.redirect('/produtos');
};