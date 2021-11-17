import { Storage } from "./data/Storage.js";

export const redirectm = (req, res) => {
    console.log(req)
    const codea = req.url.replace(/\//, "");
    const code = codea.replace("!", "");
    let found = false;

    Storage.data.links.forEach((linkObject) => {
        if (linkObject.code === code) {
            found = true;
            res.status(200).send(
                `<a href="${linkObject.url}">${linkObject.url}</a>`
            );
        }
    });

    if (!found) {
        res.status(404).send("<img src=https://http.cat/404.jpg>")
    }
};
