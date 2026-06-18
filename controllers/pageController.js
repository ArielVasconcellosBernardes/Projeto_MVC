exports.login = (req, res) => {
    res.render('login');
};

exports.sobre = (req, res) => {
    res.render('sobre');
};

exports.contato = (req, res) => {
    res.render('contato');
};

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