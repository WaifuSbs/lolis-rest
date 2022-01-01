const axios = require('axios');
const endpoints = require('./endpoints.json');
const { api_url } = require('./config.json');
require('dotenv').config();

function getEndpoints() {
    let array = [];
    for (var endpoint in endpoints) {
        array.push(endpoint);
    }
    return array;
}

async function request(request) {
    try {
        let res = await axios.get(`${api_url}/album/${request}/images`, { headers: { Authorization: 'Client-ID ' + process.env.IMGUR_CLIENT_ID } });
        return res.data.data;
    } catch (err) {
        return err.response;
    }
}

function randomNumber(int) {
    return Math.floor(Math.random() * int);
}

function response(res, success, code, data, nsfw, type) {
    if (!nsfw) {
        nsfw = false;
    }
    var resBody = {};
    resBody["success"] = success;
    resBody["code"] = code;
    if (!success) {
        resBody["error"] = data;
    } else {
        resBody["data"] = {
            type: type,
            url: data.link,
            width: data.width,
            height: data.height,
            size: data.size,
            nsfw: nsfw,
            isGif: data.animated
        }
    }
    res.json(resBody);
}

module.exports = { getEndpoints, request, randomNumber, response };