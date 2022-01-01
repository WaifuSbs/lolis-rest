const { shota } = require("../endpoints.json");
const lib = require("../library");

async function get(res, type, nsfw) {
    var query;
    if (type == "gif") {
        nsfw == "true" ? query = shota.nsfw.gif : query = shota.sfw.gif;
    } else {
        nsfw == "true" ? query = shota.nsfw.pic : query = shota.sfw.pic;
    }
    if (query == "") return lib.response(res, false, 500, "Album ID is not provided in endpoints.json");
    var data = await lib.request(query);
    if (data.status) return lib.response(res, false, data.status, data.statusText);
    if (data.length == 0) return lib.response(res, false, 204, "Empty album");
    var num = lib.randomNumber(data.length);
    return lib.response(res, true, 200, data[num], nsfw ? true : false, "shota");
}

module.exports = {get };