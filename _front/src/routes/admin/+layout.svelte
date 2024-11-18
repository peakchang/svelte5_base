<script>
    import { user_info } from "$lib/store.js";
    import { goto } from "$app/navigation";

    let drawerToggle;

    $effect(() => {
        if ($user_info.rate < 2) {
            alert("확인할수 없는 등급입니다. 관리자에게 문의해주세요.");
            goto("/");
        }
    });

    function menuClick() {
        drawerToggle.click();
    }
</script>

<div class="drawer">
    <input
        id="my-drawer"
        type="checkbox"
        class="drawer-toggle"
        bind:this={drawerToggle}
    />
    <div class="drawer-content suit-font">
        <!-- 상단 고정 부분 -->
        <div class="py-3 px-5 bg-gray-600 flex items-center gap-6">
            <!-- Page content here -->
            <label for="my-drawer" class="text-white text-2xl cursor-pointer">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </label>

            <div>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="/admin">
                    <i class="fa fa-home text-2xl text-white" aria-hidden="true"
                    ></i>
                </a>
            </div>

            <span class="text-white">{$user_info.name}님 반갑습니다.</span>
        </div>
        <!-- svelte-ignore slot_element_deprecated -->
        <div class="py-3 px-5">
            <slot></slot>
        </div>
    </div>
    <div class="drawer-side suit-font">
        <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
        >
        </label>

        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <div class="py-5 flex justify-between items-center">
                <span>관리자 메뉴</span>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <!-- svelte-ignore event_directive_deprecated -->
                <button
                    on:click={() => {
                        drawerToggle.click();
                    }}
                    class="text-2xl"
                >
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>

            {#if $user_info.rate >= 5}
                <!-- Sidebar content here -->
                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin" on:click={menuClick}>
                        <span>
                            <i class="fa fa-cog" aria-hidden="true"></i>
                        </span>
                        <span> 환경설정 </span>
                    </a>
                </li>

                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin/minisite1" on:click={menuClick}>
                        <span>
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </span>
                        <span> 미니사이트1 </span>
                    </a>
                </li>
                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin/minisite2" on:click={menuClick}>
                        <span>
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </span>
                        <span> 미니사이트2 </span>
                    </a>
                </li>
                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin/dbcount" on:click={menuClick}>
                        <span>
                            <i class="fa fa-list-ol" aria-hidden="true"></i>
                        </span>
                        <span> DB 갯수 체크 </span>
                    </a>
                </li>

                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin/usermanage" on:click={menuClick}>
                        <span>
                            <i class="fa fa-users" aria-hidden="true"></i>
                        </span>
                        <span> 회원관리 </span>
                    </a>
                </li>

                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin/dbupload" on:click={menuClick}>
                        <span>
                            <i class="fa fa-upload" aria-hidden="true"></i>
                        </span>
                        <span> DB 업로드 </span>
                    </a>
                </li>

                <li class="side-menu">
                    <!-- svelte-ignore event_directive_deprecated -->
                    <a href="/admin/alldb" on:click={menuClick}>
                        <span>
                            <i class="fa fa-table" aria-hidden="true"></i>
                        </span>
                        <span> 전체 DB </span>
                    </a>
                </li>
            {/if}

            <li class="side-menu">
                <!-- svelte-ignore event_directive_deprecated -->
                <a href="/admin/managerdb" on:click={menuClick}>
                    <span>
                        <i class="fa fa-database" aria-hidden="true"></i>
                    </span>
                    <span> 접수 DB </span>
                </a>
            </li>

            <li class="side-menu">
                <!-- svelte-ignore event_directive_deprecated -->
                <a href="/admin/myinfomanage" on:click={menuClick}>
                    <span>
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span> 내 정보 변경 </span>
                </a>
            </li>
        </ul>
    </div>
</div>

<style>
    .side-menu {
        padding: 8px 0px;
        font-size: 16px;
    }

    :global(.input-base) {
        border-radius: 6px;
        padding: 7px 5px;
        border: 1px solid #cfcfcf;
        width: 100%;
        font-size: 14px;
        background-color: #f6f6f6;
    }
    :global(.input-base:focus) {
        border: 1px solid #40a9ff;
        outline: none;
        background-color: #ffffff;
    }
    :global(.in-th) {
        padding: 10px 5px;
        border: 1px solid #cfcfcf;
    }
    :global(.in-td) {
        padding: 3px 2px;
        border: 1px solid #cfcfcf;
    }
</style>
