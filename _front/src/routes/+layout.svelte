<script>
    import "../app.css";
</script>

<svelte:head>
    <!-- SUIT 폰트 CSS -->
    <link
        href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
        rel="stylesheet"
    />

    <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
    />

    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
</svelte:head>

<slot></slot>


<style>
	@font-face {
		font-family: "OKDDUNG";
		src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKDDUNG.woff2")
			format("woff2");
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: "KBO-Dia-Gothic_bold";
		src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff")
			format("woff");
		font-weight: 700;
		font-style: normal;
	}

	:global(.kbo-font) {
		font-family: "KBO-Dia-Gothic_bold";
	}

	:global(.title-font) {
		font-family: "OKDDUNG";
	}

	:global(.suit-font) {
		font-family: "SUIT" !important;
	}

</style>