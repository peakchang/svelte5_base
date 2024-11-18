<script>
    import axios from "axios";
    import { back_api } from "$lib/const.js";
    import { goto } from "$app/navigation";
    import { user_info } from "$lib/store.js";

    let userId = $state("");
    let userPwd = $state("");

    console.log(back_api);

    $effect(() => {
        if ($user_info.id) {
            alert("이미 로그인 되어 있습니다.");
            goto("/");
        }
    });

    async function loginSubmit() {
        if (!userId ||!userPwd) {
            alert("아이디와 비밀번호를 모두 입력하세요.");
            return;
        }
        try {
            const res = await axios.post(
                `${back_api}/auth/login`,
                {
                    userid: userId,
                    password: userPwd,
                },
                { withCredentials: true },
            );
            if (res.status === 200) {
                goto('/')
            }
        } catch (err) {
            console.log(err.message);

            console.error(err.message);
        }
    }
</script>

<div class=" mt-20 max-w-96 mx-auto suit-font">
    <div class="text-center text-gray-600 text-2xl mb-6 kbo-font">
        탑분양 로그인
    </div>

    <!-- svelte-ignore event_directive_deprecated -->
    <form on:submit={loginSubmit}>
        <label
            class="input input-bordered flex items-center gap-2 text-sm mb-5"
        >
            <span class="min-w-4 flex justify-center">
                <i class="fa fa-id-card-o opacity-70" aria-hidden="true"></i>
            </span>

            <input
                type="text"
                class="grow"
                placeholder="아이디를 입력하세요"
                bind:value={userId}
            />
        </label>

        <label
            class="input input-bordered flex items-center gap-2 text-sm mb-5"
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
        <button class="btn btn-info min-h-11 h-11 text-white w-full">
            로그인
        </button>
    </form>
</div>
