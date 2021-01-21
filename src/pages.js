const Database = require("./database/db");
const MedicsDatabase = require("./database/medics")

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async local(req, res) {
    const id = req.query.id;

    try {
      const local = await Database
        .get('locais')
        .find({ 'id': parseInt(id) })
        .value();
      return res.render("local", { local });

    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  async locals(req, res) {
    try {
      const locais = Database
        .get('locais')
        .value();

      return res.render("locals", { locais });

    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  async medics(req, res) {

    try {
      const medics = MedicsDatabase
        .get('medicos')
        .value()

      return res.render("medics", { medics });

    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

};
