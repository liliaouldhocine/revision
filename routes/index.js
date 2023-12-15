const router = require("express").Router();

router.get("/", (request, response) => {
  response.render("home");
});

router.get("/adil", (request, response) => {
  response.render("adil");
});

router.get("/clara", (request, response) => {
  response.render("clara");
});

router.get("/david", (request, response) => {
  response.render("david");
});

router.get("/kevinf", (request, response) => {
  response.render("kevinf");
});

router.get("/kevinm", (request, response) => {
  response.render("kevinm");
});

router.get("/maryam", (request, response) => {
  response.render("maryam");
});

router.get("/matheus", (request, response) => {
  response.render("matheus");
});

router.get("/tiago", (request, response) => {
  response.render("tiago");
});

router.get("/yasmin", (request, response) => {
  response.render("yasmin");
});

module.exports = router;
