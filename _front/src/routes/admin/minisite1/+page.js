import axios from "axios";
import { back_api } from "$lib/const.js";

// 사이트 접속시 user_info store 값에 user 정보 넣기
export const load = async ({ params, url, data }) => {
    console.log(url);

    let minisiteData = [];
    try {
        const res = await axios.post(`${back_api}/minisite1/load_minisite`)
        if (res.status == 200) {
            minisiteData = res.data;
        }
    } catch (error) {

    }


    return { minisiteData }
}