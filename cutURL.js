import { Storage } from "./data/Storage.js";

var adres_strony = "http://localhost/"

export const cutURL = (req, res) => {
    const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/; //https
    const urlRegex2 = /^(http?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/; //http

    if (req.body.url === undefined || !urlRegex.test(req.body.url) || !urlRegex2.test(req.body.url))
        return res.status(400).send("<img src=https://http.cat/400.jpg>")

    const code = "xxxxxx".replace(/x/g, () =>
        Math.floor(Math.random() * 16).toString(16)
    );

    Storage.data.links.push({
        url: req.body.url,
        code: code,
    });
    Storage.write();

    res.status(200).send({
        code: code,
        url: adres_strony + code
    });
};