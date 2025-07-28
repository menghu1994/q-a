<script setup lang="ts">
import Nav from './Nav/index.vue'
</script>

<template>
	<div class="mx-auto my-0 p-4 h-screen flex flex-col">
		<header class="relative">
			<div class="tab-head absolute left-0 text-left text-white">
				Question
			</div>
			<div class="tab-head absolute right-0 text-right text-white">
				Answer
			</div>
			<div class="tab-head-bottom w-full absolute"></div>
		</header>
		<!-- <div class="absolute h-[40px] left-50 z-10 top-0">
			<Nav></Nav>
		</div> -->

		<div class="tab-content h-full p-2 rounded-b-3xl z-9 mt-8 overflow-y-auto">
			<RouterView />
		</div>
	</div>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="hidden">
		<defs>
			<filter id="fancy-goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
				<feComposite in="SourceGraphic" in2="goo" operator="atop" />
			</filter>
		</defs>
	</svg>
</template>

<style lang="scss">
.tab-content {
	background: #e7e5d6;
}

header {
	filter: url("#fancy-goo");
	top: 0;
	height: 40px;

	.tab-head {
		min-width: 10%;
		white-space: nowrap;
		height: 40px;
		background: #e7e5d6;
		padding: 8px 24px;
		z-index: 2;

		&:nth-child(1) {
			clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);
		}

		&:nth-child(2) {
			clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
		}
	}

	.tab-head-bottom {
		height: 70px;
		top: 40px;
		background: #e7e5d6;
	}
}
</style>