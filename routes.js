const router = require('express').Router();
const lib = require('./library');

router.get('/', async function(req, res) {
    res.json({ message: "Welcome!" });
});

router.get(`/:endpoint`, async function(req, res) {
    var eplist = await lib.getEndpoints();
    if (!eplist.includes(req.params.endpoint)) return lib.response(res, false, 404, "Not found");
    var format;
    var nsfw;
    if (req.query.format) {
        format = req.query.format.toLowerCase();
    }
    if (req.query.nsfw) {
        nsfw = req.query.nsfw;
    }
    if (req.query.type) {
        require(`./endpoints/${req.params.endpoint}`).get(res, format, nsfw, req.query.type.toLowerCase());
    } else {
        require(`./endpoints/${req.params.endpoint}`).get(res, format, nsfw);
    }
    // https://loli.waifu.sbs/random?type=loli&format=gif&nsfw=true
});

module.exports = router;