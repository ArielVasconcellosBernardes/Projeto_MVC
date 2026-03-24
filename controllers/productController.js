const Product = require('../models/productModel');

exports.list = (req, res) => {
    res.render('produtos', { products: Product.getAll(), edit: null });
};

exports.create = (req, res) => {
    const { name, price } = req.body;
    Product.create(name, price);
    res.redirect('/produtos');
};

exports.delete = (req, res) => {
    Product.delete(req.params.id);
    res.redirect('/produtos');
};

exports.editForm = (req, res) => {
    const product = Product.getById(req.params.id);
    res.render('produtos', {
        products: Product.getAll(),
        edit: product
    });
};

exports.update = (req, res) => {
    const { name, price } = req.body;
    Product.update(req.params.id, name, price);
    res.redirect('/produtos');
};