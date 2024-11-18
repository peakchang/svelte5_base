import express from "express";
import { sql_con } from '../back-lib/db.js'
import { getQueryStr } from '../back-lib/lib.js';
const minisite1Router = express.Router();

minisite1Router.post('/load_minisite', async (req, res) => {

    let minisiteData = [];
    try {
        const getMinisite1Query = "SELECT hy_id,hy_num,hy_title,hy_counter FROM hy_site ORDER BY hy_id DESC LIMIT 0, 15";
        const [miniSiteRows] = await sql_con.promise().query(getMinisite1Query);
        minisiteData = miniSiteRows;
    } catch (err) {
        console.error(err.message);
    }

    res.json(minisiteData)
})

minisite1Router.get('/', (req, res) => {
    res.send('asldfjalisjdfliajsdf')
})


export { minisite1Router }