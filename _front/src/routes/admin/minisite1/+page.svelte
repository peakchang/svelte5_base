<script>
    let loading = true;
    let { data } = $props();
    let minisiteData = $state(data.minisiteData);

    $effect(() => {
        console.log(minisiteData);

        if (minisiteData) {
            loading = false;
        }
    });
</script>

<div class="">
    <table class="w-full text-xs md:text-sm text-center">
        <thead>
            <tr>
                <th class="in-th w-14">
                    <div class="flex justify-center items-center">
                        <input
                            type="checkbox"
                            class="checkbox checkbox-xs md:checkbox-sm"
                        />
                    </div>
                </th>
                <th class="in-th"> 아이디 </th>
                <th class="in-th"> 현장명 </th>
                <th class="in-th"> 바로보기 </th>
                <th class="in-th"> 조회수 </th>
            </tr>
        </thead>
        <tbody>
            {#each minisiteData as data, idx}
                <tr>
                    <td class="in-td py-3">
                        <div class="flex justify-center items-center">
                            <input
                                type="checkbox"
                                value={minisiteData[idx].hy_id}
                                class="checkbox checkbox-xs md:checkbox-sm"
                            />
                        </div>
                    </td>
                    <td class="in-td w-1/5">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={minisiteData[idx].hy_num}
                        />
                    </td>
                    <td class="in-td"> {minisiteData[idx].hy_title} </td>
                    <td class="in-td">
                        <button
                            class="btn btn-outline btn-accent min-h-8 h-8 text-xs"
                            >바로가기</button
                        >
                    </td>
                    <td class="in-td"> {minisiteData[idx].hy_counter} </td>
                </tr>
            {/each}
        </tbody>
    </table>

    <div class="flex">
        <div class="join mt-3 mx-auto">
            <input
                class="join-item btn w-10 min-h-10 h-10 checked:!bg-blue-500 checked:border-none"
                type="radio"
                name="options"
                aria-label="1"
                checked="checked"
            />
            <input
                class="join-item btn w-10 min-h-10 h-10 checked:!bg-blue-500 checked:border-none"
                type="radio"
                name="options"
                aria-label="2"
            />
            <input
                class="join-item btn w-10 min-h-10 h-10 checked:!bg-blue-500 checked:border-none"
                type="radio"
                name="options"
                aria-label="3"
            />
            <input
                class="join-item btn w-10 min-h-10 h-10 checked:!bg-blue-500 checked:border-none"
                type="radio"
                name="options"
                aria-label="4"
            />
        </div>
    </div>
</div>
