module.exports = app => {
    const submit = require("../controllers/submit.controller.js");

    var router = require("express").Router();

    router.post("/", submit.create);
    router.put("/delete/:SId",submit.DeleteFromId);
    router.put("/editjoke/:SId",submit.updateJoke);
    router.get("/getone/:SId",submit.findByJoke);

    app.use('/api/submit', router);
}