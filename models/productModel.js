let products = [];
let id = 1;


module.exports = {

    /**
     * @function getAll
     * @returns {Array<{id: number, name: string, price: number}>} Lista de todos os produtos atualmente armazenados.
     * @example
     * const todos = Product.getAll();
     * // [{ id: 1, name: 'Mouse', price: 49.9 }, ...]
     */
    getAll: () => products,

    /**
     * @function create
     * @param {string} name - Nome do produto a ser cadastrado.
     * @param {number} price - Preço do produto a ser cadastrado.
     * @returns {void} Não retorna valor; o produto é adicionado diretamente ao array interno.
     * @throws {TypeError} Esta versão não realiza validação explícita dos parâmetros;
     * valores `undefined` ou de tipo incorreto serão armazenados sem verificação,
     * podendo gerar inconsistências em camadas superiores.
     *
     * @example
     * Product.create('Teclado Mecânico', 199.90);
     */
    create: (name, price) => {
        products.push({ id: id++, name, price });
    },

    /**
     * @function delete
     * @param {number|string} idParam - ID do produto a ser removido (aceita string ou number devido à origem via `req.params`).
     * @returns {void}
     *
     * @example
     * Product.delete(3);
     */
    delete: (idParam) => {
        products = products.filter(p => p.id != idParam);
    },

    /**
     * @function getById
     * @param {number|string} idParam - ID do produto a ser buscado.
     * @returns {({id: number, name: string, price: number}|undefined)} O objeto do produto encontrado,
     * ou `undefined` caso nenhum produto corresponda ao ID informado.
     *
     * @example
     * const produto = Product.getById(1);
     */
    getById: (idParam) => {
        return products.find(p => p.id == idParam);
    },

    /**
     * @function update
     * @param {number|string} idParam - ID do produto a ser atualizado.
     * @param {string} name - Novo nome a ser atribuído ao produto.
     * @param {number} price - Novo preço a ser atribuído ao produto.
     * @returns {void}
     * @throws {Error} Não lança erro explicitamente; se o produto não existir, a atualização é ignorada silenciosamente
     * (ponto de atenção para futuras versões: considerar lançar um erro customizado, ex: `ProductNotFoundError`).
     *
     * @example
     * Product.update(1, 'Teclado Mecânico RGB', 249.90);
     */
    update: (idParam, name, price) => {
        const product = products.find(p => p.id == idParam);
        if (product) {
            product.name = name;
            product.price = price;
        }
    }
};