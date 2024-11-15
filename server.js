import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
import { sql_con } from './back-lib/db.js'

dotenv.config();

import { handler } from "./_front/build/handler.js"

import { apiRouter } from "./routes/api.js"
import { authRouter } from "./routes/auth.js"


// import { apiRouter } from "./routes/exapi.js"
app.set('port', process.env.PORT || 3075);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ESM 오류 해결을 위해 __dirname, __filename 직접 변수 작성
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

app.use(express.static('public', { ignore: ['favicon.ico'] }));
app.use('/editor', express.static(path.join(__dirname, 'public/uploads/editor')));
app.use('/image', express.static(path.join(__dirname, 'public/uploads/image')));
app.use('/py_img', express.static(path.join(__dirname, 'public/uploads/pyimg')));

let originLink;


if (process.env.NODE_ENV === 'production') {
    const whiteListStr = process.env.SITE_LINK
    console.log(whiteListStr);
    const whiteListArr = whiteListStr.split(',');
    originLink = [/\.allthatby\.co.kr$/, 'https://allthatby.co.kr']
} else {
    originLink = true;
}

let corsOptions = {
    // 여기는 svelte (프론트엔드) 가 돌아가는 주소
    origin: originLink,
    credentials: true
}
app.use(cors(corsOptions));

app.enable('trust proxy');

app.use('/api/v3', apiRouter);
app.use('/api/v3/auth', authRouter);


app.use('/chk', (req, res) => {
    res.send('백엔드 생성 완료!!')
});
app.use(handler);


app.listen(app.get('port'), () => {
    console.log(`server running in port ${app.get('port')}`);
})