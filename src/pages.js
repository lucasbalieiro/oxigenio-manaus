const Database = require("./database/db");

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

      if (local.open_on_weekends == "0") {
        local.open_on_weekends = false;
      } else {
        local.open_on_weekends = true;
      }

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
  }
};
