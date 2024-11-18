import express from "express";

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.send('asldfjalisjdfliajsdf')
})


export { apiRouter }