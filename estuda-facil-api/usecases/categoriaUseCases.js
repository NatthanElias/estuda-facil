const { pool } = require('../config');
const Categoria = require('../entities/categoria')

const getCategoriasDB = async () => {
    try {    
        const { rows } = await pool.query('SELECT * FROM categorias ORDER BY nome');
        return rows.map((categoria) => new Categoria(categoria.codigo, categoria.nome));        
    } catch (err) {
        throw "Erro : " + err;
    }
}

module.exports = {
    getCategoriasDB
}