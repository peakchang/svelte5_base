import express from "express";
import { sql_con } from '../back-lib/db.js'
import bcrypt from "bcrypt";

import moment from "moment-timezone";
const koreaTime = moment.tz('Asia/Seoul');



import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.send('asldfjalisjdfliajsdf')
})


export { apiRouter }