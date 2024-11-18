import { user_info } from "$lib/store.js";

// 사이트 접속시 user_info store 값에 user 정보 넣기
export const load = async ({ params, url, data }) => {
    const { user } = data;
    user_info.set(user)
}