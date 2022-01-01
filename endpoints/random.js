const { random } = require("../endpoints.json");
const lib = require("../library");

async function get(res, format, nsfw, type) {
    var query;
    var allowed = random.allowed;

    if (type == "loli") {
        nsfw == "true" ? query = "loli_nsfw" : query = "loli_sfw";
    } else if (type == "shota") {
        nsfw == "true" ? query = "shota_nsfw" : query = "shota_sfw";
    } else {
        nsfw == "true" ? (lib.randomNumber(2) == 0 ? query = "loli_nsfw" : query = "shota_nsfw") : (lib.randomNumber(2) == 0 ? query = "loli_sfw" : query = "shota_sfw");
    }

    if (format == "gif") {
        query += "_gif";
    } else if (format == "pic") {
        query += "_pic";
    } else {
        lib.randomNumber(2) == 0 ? query += "_pic" : query += "_gif";
    }

    var exe = query.split("_");
    if (format || nsfw || type) {
        if (!allowed.includes(query)) return lib.response(res, false, 403, "Your query is not accepted by endpoints.json");
        if (exe[0] == "loli") {
            require("./loli").get(res, exe[2], exe[1] == "nsfw" ? true : false);
        } else if (exe[0] == "shota") {
            require("./shota").get(res, exe[2], exe[1] == "nsfw" ? true : false);
        }
    } else {
        if (!allowed.includes(query)) {
            reRandom(res, format, nsfw, type);
        } else {
            if (exe[0] == "loli") {
                require("./loli").get(res, exe[2], exe[1] == "nsfw" ? true : false);
            } else if (exe[0] == "shota") {
                require("./shota").get(res, exe[2], exe[1] == "nsfw" ? true : false);
            }
        }
    }
}

function reRandom(res, format, nsfw, type) {
    get(res, format, nsfw, type);
}

module.exports = {get };