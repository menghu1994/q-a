<template>
	<ul class="flex h-full text-red gap-4">
		<li v-for="(navItem, navIndex) in navList" :id="navItem" class="flex">
			<template v-if="isOdd(navIndex)">
				<svg viewBox="0 0 28 161" fill="none" xmlns="http://www.w3.org/2000/svg"
					class="h-full md:block block -scale-y-100" preserveAspectRatio="none">
					<path
						d="M0 161L21.1074 161C24.7499 161 27.5521 157.781 27.0502 154.173L6.31974 5.17317C5.90712 2.2075 3.37121 -2.94722e-07 0.37698 -3.29578e-08L-1.40751e-05 0L0 161Z"
						fill="#F5F5F5"></path>
				</svg>
				<div style="background-color: #F5F5F5;">{{ navItem }}</div>
				<svg viewBox="0 0 28 160" fill="none" xmlns="http://www.w3.org/2000/svg"
					class="h-full md:block block -scale-y-100" preserveAspectRatio="none">
					<path
						d="M28 0L6.89851 1.84475e-06C3.25398 2.16337e-06 0.451159 3.22256 0.956465 6.83189L21.6765 154.832C22.0914 157.795 24.6262 160 27.6185 160L28 160L28 0Z"
						fill="#F5F5F5"></path>
				</svg>
			</template>
			<template v-else>
				<svg viewBox="0 0 28 161" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full md:block block"
					preserveAspectRatio="none">
					<path
						d="M0 161L21.1074 161C24.7499 161 27.5521 157.781 27.0502 154.173L6.31974 5.17317C5.90712 2.2075 3.37121 -2.94722e-07 0.37698 -3.29578e-08L-1.40751e-05 0L0 161Z"
						fill="#F5F5F5"></path>
				</svg>
				<div style="background-color: #F5F5F5;">{{ navItem }}</div>
				<svg viewBox="0 0 28 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full md:block block"
					preserveAspectRatio="none">
					<path
						d="M28 0L6.89851 1.84475e-06C3.25398 2.16337e-06 0.451159 3.22256 0.956465 6.83189L21.6765 154.832C22.0914 157.795 24.6262 160 27.6185 160L28 160L28 0Z"
						fill="#F5F5F5"></path>
				</svg>
			</template>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navList = ref<any>([
	'nav', 'comp', 'other'
])

function isOdd(num: number) {
	return num % 2 !== 0;
}
</script>

<style lang="scss"></style>
