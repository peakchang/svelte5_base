// hooks.server.js 에서 받아온 유저 정보 +layout.js 로 넘기기 위한 중간 단계
export const load = async ({ locals }) => {
    return {
        user: locals.user_info
    }
}