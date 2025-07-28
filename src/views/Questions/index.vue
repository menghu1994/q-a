<template>
	<div class="questions-container">
		<ul class="navigation-menu flex flex-col gap-2 p-0 m-0">
			<li v-for="(q, index) of questions" :key="index">
				<Question :question="q.question" :type="q.type"></Question>
			</li>
		</ul>
		<!-- <Editor></Editor> -->
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Question from "./questionItem.vue";
import Editor from "@/components/editor.vue";
import { Questions } from "./mock";

const questions = ref<any>(Questions)
</script>

<style lang="scss">
.questions-container {
	max-width: 800px;
	margin: 0 auto;

	.navigation-menu {
		list-style: none;

		li {
			display: block;
			padding: 1rem 1.5rem;
			border-radius: 12px;
			background: linear-gradient(135deg, #f8f9fa, #e9ecef);
			border: 1px solid #dee2e6;
			text-decoration: none;
			color: #212529;
			transition: all .3s ease;
			box-shadow: 0 2px 8px #00000014;
			position: relative;
			overflow: hidden;

			&:hover {
				transform: translateY(-2px);
				background: linear-gradient(135deg, #f1f3f4, #e2e6ea);
				color: #18794e;
			}
		}
	}
}
</style>
