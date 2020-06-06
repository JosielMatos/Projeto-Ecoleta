const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

/*db.serialize(()=> {
    //comandos SQL para criação de tabelas; inserir, consultar e deletar dados
    db.run(`
    CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );`)
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
const values = [
    "https://images.unsplash.com/photo-1533484896830-ed8d157ce7fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "Colectoria",
    "Guilherme Gemballa, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas"
]
function afterInsertData (err){
    if (err) {
        return console.log(err)
    }
    console.log("Cadastrado com Sucesso")
    console.log(this)
}
    //db.run(query, values, afterInsertData)
    db.all(`SELECT name FROM places`, function(err, rows){
    if (err) {
        return console.log(err)
    }
    console.log("Aqui estão os seus registros: ")
    console.log(rows)
    })
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        if (err) {
            return console.log(err)
    }
    console.log("Registro deletado com sucesso!")
    })
})*/
