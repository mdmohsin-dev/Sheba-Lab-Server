import express from "express";
const app = express();
const port = 5000;
app.listen(port, () => {
    console.log('server is listen');
});
app.get("/", (req, res) => {
    res.send("Sheba lab");
});
//# sourceMappingURL=server.js.map