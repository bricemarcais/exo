const homePage = (req, res) => {
  res.send("Bienvenuec");
};

const aboutPage = (req, res) => {
  res.send("A propos");
};

const infosPage = (req, res) => {
  const data = { voiture: "Toyota", name: "Supra", model: "2000" };
  res.json(data);
};

const redirect = (req, res) => {
  res.redirect("/");
};

const userController = (req, res) => {
  const { id } = req.params;
  res.send(`Id de l'utilisateur: ${id}`);
};

const page404 = (req, res) => {
  res.status(404).send("Page non trouvée");
};
module.exports = {
  homePage,
  aboutPage,
  infosPage,
  redirect,
  userController,
  page404,
};
