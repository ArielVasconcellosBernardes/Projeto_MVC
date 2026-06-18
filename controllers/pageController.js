/**
 * @function login
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para renderizar a view `login`.
 * @returns {void}
 */
exports.login = (req, res) => {
    res.render('login');
};

/**
 * @function sobre
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para renderizar a view `sobre`.
 * @returns {void}
 */
exports.sobre = (req, res) => {
    res.render('sobre');
};

/**
 * @function contato
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para renderizar a view `contato`.
 * @returns {void}
 */
exports.contato = (req, res) => {
    res.render('contato');
};

/**
 * @function home
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para renderizar a view `home`.
 * @returns {void}
 */
exports.home = (req, res) => {
    res.render('home');
};

/**
 * @function setCookie
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express, utilizado para definir o cookie e enviar a mensagem de confirmação.
 * @returns {void}
 */
exports.setCookie = (req, res) => {
    res.cookie('user', 'john_doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie setado');
}