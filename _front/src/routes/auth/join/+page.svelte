<script>
    import axios from "axios";
    import { back_api } from "$lib/const.js";
    import { goto } from "$app/navigation";
    import { user_info } from "$lib/store.js";

    let userId = $state("");
    let userIdAlertBool = $state(true);

    let userName = $state("");
    let userPhone = $state("");
    let userEmail = $state("");

    let userPwd = $state("");
    let userPwdChk = $state("");

    let pwdChkBool = $state(false);

    $effect(() => {
        if($user_info.id){
            alert('이미 회원입니다.')
            goto('/')
        }
    });

    // 아이디 입력 란 포커스 아웃시 중복 아이디 체크
    async function idFocusOut() {
        try {
            if (userId) {
                const res = await axios.post(
                    `${back_api}/auth/id_duplicate_chk`,
                    {
                        userId,
                    },
                );
                // 응답으로 존재 여부를 받아서 처리
                if (res.data.exists) {
                    userIdAlertBool = false;
                } else {
                    userIdAlertBool = true;
                }
            }
        } catch (error) {
            console.error("오류 발생:", error.message);
        }
    }

    // 회원가입 완료 창, 이메일은 포커스 아웃 안하고 에러처리만 함, 기타 내용은 코드 참고
    async function joinSubmit() {
        if (userIdAlertBool == false) {
            alert("아이디 중복 됩니다.");
            return;
        }
        if (!userId) {
            alert("아이디를 입력하세요.");
            return;
        }
        if (!userName) {
            alert("이름을 입력하세요.");
            return;
        }
        if (!userPhone) {
            alert("휴대폰 번호를 입력하세요.");
            return;
        }
        if (!userEmail) {
            alert("이메일 주소를 입력하세요.");
            return;
        }
        if (pwdChkBool == false) {
            alert("비밀번호 확인이 일치하지 않습니다.");
            return;
        }
        const resPhone = userPhone.replace(/[^\w]/g, "");
        console.log(resPhone);
        try {
            const res = await axios.post(`${back_api}/auth/register`, {
                userid: userId,
                user_email: userEmail,
                user_phone: userPhone,
                nick: userName,
                password: userPwd,
            });
            alert("회원가입 성공! 로그인을 완료 해주세요.");
            goto("/auth/login");
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                console.error("네트워크 에러 발생! 잠시 후 다시 시도해주세요!");
            }
        }
    }
</script>

<div class=" mt-20 max-w-96 mx-auto suit-font">
    <div class="text-center text-gray-600 text-2xl kbo-font">
        탑분양 회원가입
    </div>

    <!-- svelte-ignore event_directive_deprecated -->
    <form on:submit={joinSubmit}>
        <label
            class="input input-bordered flex items-center gap-2 text-sm mt-5"
        >
            <span class="min-w-4 flex justify-center">
                <i class="fa fa-id-card-o opacity-70" aria-hidden="true"></i>
            </span>

            <input
                type="text"
                class="grow"
                placeholder="아이디를 입력하세요"
                on:focusout={idFocusOut}
                bind:value={userId}
            />
        </label>
        <div
            class="text-red-500 text-xs pl-2 mt-1"
            class:hidden={userIdAlertBool}
        >
            이미 사용중인 아이디 입니다.
        </div>

        <label
            class="input input-bordered flex items-center gap-2 text-sm mt-5"
        >
            <span class="min-w-4 flex justify-center">
                <i class="fa fa-user opacity-70" aria-hidden="true"></i>
            </span>
            <input
                type="text"
                class="grow"
                placeholder="이름을 입력하세요"
                bind:value={userName}
            />
        </label>

        <label
            class="input input-bordered flex items-center gap-2 text-sm mt-5"
        >
            <span class="min-w-4 flex justify-center">
                <i class="fa fa-mobile text-lg opacity-70" aria-hidden="true"
                ></i>
            </span>

            <input
                type="text"
                class="grow"
                placeholder="휴대폰 번호를 입력하세요"
                bind:value={userPhone}
            />
        </label>

        <label
            class="input input-bordered flex items-center gap-2 text-sm mt-5"
        >
            <span class="min-w-4 flex justify-center">
                <i class="fa fa-envelope-o opacity-70" aria-hidden="true"></i>
            </span>
            <input
                type="text"
                class="grow"
                placeholder="이메일을 입력하세요"
                bind:value={userEmail}
            />
        </label>

        <label
            class="input input-bordered flex items-center gap-2 text-sm mt-5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
            >
                <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                />
            </svg>
            <input
                type="password"
                class="grow"
                placeholder="비밀번호를 입력하세요"
                bind:value={userPwd}
            />
        </label>

        <label
            class="input input-bordered flex items-center gap-2 text-sm mt-5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
            >
                <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                />
            </svg>
            <input
                type="password"
                class="grow"
                placeholder="비밀번호 확인"
                bind:value={userPwdChk}
                on:input={() => {
                    if (userPwd == userPwdChk) {
                        pwdChkBool = true;
                    } else {
                        pwdChkBool = false;
                    }
                }}
            />
        </label>

        {#if userPwd && userPwdChk}
            <div
                class="text-red-500 text-xs pl-2 mt-1"
                class:hidden={pwdChkBool}
            >
                비밀번호가 일치하지 않습니다.
            </div>

            <div
                class="text-green-500 text-xs pl-2 mt-1"
                class:hidden={!pwdChkBool}
            >
                비밀번호가 일치합니다.
            </div>
        {/if}

        <button class="btn btn-info min-h-11 h-11 text-white w-full mt-5">
            가입하기
        </button>
    </form>
</div>
