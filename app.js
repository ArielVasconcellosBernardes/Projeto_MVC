const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'chavefoda',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Rotas
const pageRoutes = require('./routs/pageRoutes');
const productRoutes = require('./routs/productRoutes');

app.use('/', pageRoutes);
app.use('/produtos', productRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.error(`Erro ao iniciar o servidor na porta ${PORT}:`, error.message);
        process.exit(1);
    }

    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
