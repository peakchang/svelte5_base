import express from "express";
import { sql_con } from '../back-lib/db.js'
import { getQueryStr } from '../back-lib/lib.js';
const adminBaseRouter = express.Router();


adminBaseRouter.post('/update_form_status', async (req, res) => {
    const body = req.body;
    const fsId = body.fs_id;
    delete body.fs_id;
    const queryStr = getQueryStr(body, 'update');
    queryStr.values.push(fsId)
    try {
        const updateFormStatusQuery = `UPDATE form_status SET ${queryStr.str} WHERE fs_id=?`;
        await sql_con.promise().query(updateFormStatusQuery, queryStr.values);
    } catch (err) {
        console.error(err.message);
    }
    res.json({})
})


adminBaseRouter.post('/get_form_status', async (req, res) => {
    console.log('wlifjlwijflwijef');

    let form_status_data = {}
    try {
        const formStatusDataQuery = "SELECT * FROM form_status;"
        const [formStatusData] = await sql_con.promise().query(formStatusDataQuery);
        form_status_data = formStatusData[0]
    } catch (err) {
        console.error(err.message);
    }
    res.json(form_status_data)
})

adminBaseRouter.get('/', (req, res) => {
    res.send('asldfjalisjdfliajsdf')
})


export { adminBaseRouter }