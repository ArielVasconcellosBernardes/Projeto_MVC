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

exports.setCookie = (req, res) => {
    res.cookie('user', 'john_doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie setado');
}

