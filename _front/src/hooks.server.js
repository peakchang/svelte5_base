import { redirect } from '@sveltejs/kit';
import { back_api } from "$lib/const.js";
import { sql_con } from '$lib/server/db'
import axios from 'axios';

import { user_info } from "$lib/store";

export async function handle({ event, resolve }) {

    let userInfo = {}
    const refreshToken = event.cookies.get('tk'); // 쿠키에서 Refresh Token 가져오기
    if (refreshToken) {
        const getUserInfoQuery = "SELECT * FROM users WHERE refresh_token = ?";
        const [userInfoRow] = await sql_con.promise().query(getUserInfoQuery, [refreshToken]);
        userInfo = {
            id: userInfoRow[0].userid,
            name: userInfoRow[0].nick,
            rate: userInfoRow[0].rate
        }
    }


    // 클라이언트 측으로 값을 전달
    event.locals.user_info = userInfo;





    const res = await resolve(event); // 요청 처리
    return res;
}