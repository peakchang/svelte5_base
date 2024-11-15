<script>

    let drawerToggle;


    function menuClick() {
        console.log("alsidfjlaijsdfilj");
        drawerToggle.click();
    }
</script>

<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" bind:this={drawerToggle} />
    <div class="drawer-content suit-font">
        <!-- 상단 고정 부분 -->
        <div class="py-3 px-5 bg-gray-600 flex items-center gap-6">
            <!-- Page content here -->
            <label for="my-drawer" class="text-white text-2xl cursor-pointer">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </label>

            <div>
                <a href="/admin">
                    <i class="fa fa-home text-2xl text-white" aria-hidden="true"></i>
                </a>
            </div>
            
            <span class="text-white">마스터님 반갑습니다.</span>
        </div>
        <div class="py-3 px-5">
            <slot></slot>
        </div>
    </div>
    <div class="drawer-side">
        <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
        >
        </label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <li>
                <a href="/admin/content" on:click={menuClick}>
                    Sidebar Item 1
                </a>
            </li>

            <li>
                <a href="/admin" on:click={menuClick}>
                    Sidebar Item 1
                </a>
            </li>
        </ul>
    </div>
</div>
