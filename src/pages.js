const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const local = await Database
        .get('locais')
        .find({ 'id': parseInt(id) })
        .value();

      local.images = local.images;
      local.firstImage = local.images[0];

      if (local.open_on_weekends == "0") {
        local.open_on_weekends = false;
      } else {
        local.open_on_weekends = true;
      }

      return res.render("orphanage", { local });
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

      return res.render("orphanages", { locais });

    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    // validar se todos os campos estao preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      //salvar um orfanato
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirecionamento
      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};
