# **Lolis REST**
RESTful + Website for Lolis API.
# Introduction
This is a RESTful API which will be used on [Lolis API Website](https://lolis.waifu.sbs) and [Wrapper](https://lolis.waifu.sbs). This API uses [Imgur](https://imgur.com) to get images from different existing album for different endpoints.
# Terms of use
Please note that this API is free for non-commercial usage, that's mean you cannot make money with it, otherwise, you are free to use it.
# API Version
Current API version: v1
<br>
Base URL: https://api.waifu.sbs
<br>
Supported request: GET

# Bug report
Found a bug? Contact me - [Email](mailto:hello@thelt.ml) - Discord: [LT#0100](https://discord.com/users/388345263191752704)
# Authorization
This API does not require any types of authorization. Just make a GET request and you are done.
# Endpoints
## **/loli**
#### **Overview**
Retrieve an image link (imgur) about loli.
#### **URL**
```
https://api.waifu.sbs/loli
```
#### **Parameters**
* `format` `[gif, pic]` - Get format of image (Gif image or PNG/JPG image).
* `nsfw` `[boolean]` - NSFW image.
#### **Response**
```
{
    success: true,
    code: 200,
    data: {
        type: "loli",
        url: "https://i.imgur.com/example.png",
        width: 1280,
        height: 720,
        size: 69420727,
        nsfw: false,
        isGif: false
    }
}
```

## **/shota**
#### **Overview**
Retrieve an image link (imgur) about shota.
#### **URL**
```
https://api.waifu.sbs/shota
```
#### **Parameters**
* `format` `[gif, pic]` - Get format of image (Gif image or PNG/JPG image).
* `nsfw` `[boolean]` - NSFW image.
#### **Response**
```
{
    success: true,
    code: 200,
    data: {
        type: "shota",
        url: "https://i.imgur.com/example.png",
        width: 1280,
        height: 720,
        size: 69420727,
        nsfw: false,
        isGif: false
    }
}
```


## **/random**
#### **Overview**
Retrieve a random image link (imgur).
#### **URL**
```
https://api.waifu.sbs/random
```
#### **Parameters**
* `type` `[loli, shota]` - Get type of image (loli or shota).
* `format` `[gif, pic]` - Get format of image (Gif image or PNG/JPG image).
* `nsfw` `[boolean]` - NSFW image.
#### **Response**
```
{
    success: true,
    code: 200,
    data: {
        type: "loli",
        url: "https://i.imgur.com/example.png",
        width: 1280,
        height: 720,
        size: 69420727,
        nsfw: false,
        isGif: false
    }
}
```

## **Status codes**
| Code | Description | Occur reason |
| -------- | ----------- | -------- |
| `200` | Successful | Successful request. |
| `204` | No content | The album on imgur of specified endpoint does not contain any images. |
| `403` | Permission denied | Imgur Client-ID header maybe invalid or empty. |
| `404` | Not found | Cannot GET / |
| `500` | Internal Error | Something went wrong with the API (Album ID is empty, function exceptions). |
#### **Error response**
```
{
    success: false,
    code: 403,
    error: "Permission denied"
}
```
# Examples
## Curl
```
curl https://api.waifu.sbs/loli
```
## Node.js
```
const axios = require("axios");

async function getImage() {
    try {
        var response = await axios.get('https://api.waifu.sbs/loli');
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

getImage();
```
## jQuery
```
<p id="data"></p>
$.getJSON("https://api.waifu.sbs/loli", function(res) { 
    $("#data").text = res.data.link;
});
```
## Python
```
import requests

data = requests.get('https://api.waifu.sbs/loli')
print(data.data.link)
```
# Contribute
You can contribute to this project by [submitting images about loli/shota](https://loli.waifu.sbs/submit).<br>
### **or**
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and clone the repository
```
git clone https://github.com/username/lolis-rest.git
```
2. Commit your changes
```
git add .
git commit -m "cool new feature"
```
3. Push your changes
```
git push
```
4. Submit a pull request
# Credit
* Lolis.life for inspiring this project.