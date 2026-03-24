let products = [];
let id = 1;

module.exports = {
    getAll: () => products,

    create: (name, price) => {
        products.push({ id: id++, name, price });
    },

    delete: (idParam) => {
        products = products.filter(p => p.id != idParam);
    },

    getById: (idParam) => {
        return products.find(p => p.id == idParam);
    },

    update: (idParam, name, price) => {
        const product = products.find(p => p.id == idParam);
        if (product) {
            product.name = name;
            product.price = price;
        }
    }
};