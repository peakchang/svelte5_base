<script>
    import axios from "axios";
    import { back_api } from "$lib/const.js";
    import { invalidateAll } from "$app/navigation";

    let { data } = $props();
    let fsData = $state(data.formStatusData);

    let loding = $state(true);
    $effect(() => {
        if (fsData) {
            loding = false;
        }
    });

    async function updateFsdata() {
        try {
            const res = await axios.post(
                `${back_api}/adminbase/update_form_status`,
                fsData,
            );
            if (res.status == 200) {
                alert("업데이트가 완료 되었습니다.");
                invalidateAll();
            }
        } catch (error) {}
    }
</script>

{#if loding}
    <div class="skeleton max-w-[1200px] w-[1200px] h-12 mx-auto mb-3"></div>
    <div class="skeleton max-w-[1200px] w-[1200px] h-12 mx-auto mb-3"></div>
    <div class="skeleton max-w-[1200px] w-[1200px] h-12 mx-auto mb-3"></div>
    <div class="skeleton max-w-[1200px] w-[1200px] h-12 mx-auto mb-3"></div>
    <div class="skeleton max-w-[1200px] w-[1200px] h-12 mx-auto mb-3"></div>
{:else}
    <div class="max-w-[1200px] mx-auto text-xs md:text-sm">
        <div class="mb-3">
            <!-- svelte-ignore event_directive_deprecated -->
            <button
                class="btn btn-success min-h-8 h-8 text-white"
                on:click={updateFsdata}
            >
                업데이트
            </button>
        </div>
        <table class="w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th class="in-th">DB 종류</th>
                    <th class="in-th">상태값 셋팅</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center">
                    <td class="in-td"> 분양 DB 상태값 </td>
                    <td class="in-td">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_estate_status}
                        />
                    </td>
                </tr>
                <tr class="text-center">
                    <td class="in-td"> 상태값 색상지정 </td>
                    <td class="in-td">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_estate_status_color}
                        />
                    </td>
                </tr>
                <tr class="text-center">
                    <td class="in-td"> 마케터 리스트 </td>
                    <td class="in-td">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_marketer_list}
                        />
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="pt-7 pb-2">※ 푸터 정보</div>

        <table class="w-full">
            <tbody>
                <tr class="text-center">
                    <th class="in-th w-1/6"> 개인정보 책임자 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_personal_officer}
                        />
                    </td>

                    <th class="in-th w-1/6"> 전화 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_callnumber}
                        />
                    </td>
                </tr>

                <tr class="text-center">
                    <th class="in-th w-1/6"> 대표자 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_owner}
                        />
                    </td>

                    <th class="in-th w-1/6"> 주소 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_address}
                        />
                    </td>
                </tr>

                <tr class="text-center">
                    <th class="in-th w-1/6"> 사업자번호 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_business_num}
                        />
                    </td>

                    <th class="in-th w-1/6"> 이메일 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_email}
                        />
                    </td>
                </tr>

                <tr class="text-center">
                    <th class="in-th w-1/6"> 통신판매업신고번호 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_report_number}
                        />
                    </td>

                    <th class="in-th w-1/6"> 회사명 </th>
                    <td class="in-td w-2/6">
                        <input
                            type="text"
                            class="input-base"
                            bind:value={fsData.fs_company}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
{/if}

