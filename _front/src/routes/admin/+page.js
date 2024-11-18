import axios from "axios";
import { back_api } from "$lib/const.js";

// 사이트 접속시 user_info store 값에 user 정보 넣기
export const load = async ({ params, url, data }) => {
    let formStatusData = {}
    try {
        const res = await axios.post(`${back_api}/adminbase/get_form_status`)
        if (res.status === 200) {
            formStatusData = res.data
        }
    } catch (err) {
        console.error(err.message);
    }
    return { formStatusData }
}