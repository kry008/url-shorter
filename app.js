//Import Packages
import express from "express";
import { Storage } from "./data/Storage.js";
import { redirect } from "./redirect.js";
import { redirectm } from "./redirectm.js";
import { cutURL } from "./cutURL.js";

const app = express();
app.use(express.static('public'));

app.use(express.json());

//Start Scripts
if (Storage.data.links === undefined) {
    Storage.data.links = [];
    Storage.write();
}

//Routes
app.get('/', (req, res) => {
    res.redirect(301, '/index.html')
})
app.post("/cut", cutURL);
app.get("/[a-f0-9]{6}", redirect);
app.get("/[a-f0-9]{6}!", redirectm);
app.use((req, res) => {
    res.status(404).send("<img src=https://http.cat/404.jpg>")
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Port działania: ${port}`);
});