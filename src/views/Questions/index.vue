<template>
  <div class="questions-container">
    <ul class="navigation-menu flex flex-col gap-2 p-0 m-0">
      <li v-for="(q, index) of questions" :key="index" >
       <Question :question="q.question" :type="q.type"></Question>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Question from "./questionItem.vue";

const questions = ref<any>([
  { question: '如何实现垂直居中？', type: 'css', fav: 10, unFav: -1 },
  { question: 'Vue 3 的 Composition API 如何使用？Composition API 如何使用Composition API 如何使用Composition API 如何使用', type: 'vue', fav: 15, unFav: -2 },
  { question: 'TypeScript 接口和类型的区别', type: 'typescript', fav: 8, unFav: 0 },
])
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
			background: linear-gradient(135deg,#f8f9fa,#e9ecef);
			border: 1px solid #dee2e6;
			text-decoration: none;
			color: #212529;
			transition: all .3s ease;
			box-shadow: 0 2px 8px #00000014;
			position: relative;
			overflow: hidden;
			
			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 4px 16px #0000001f;
				background: linear-gradient(135deg,#f1f3f4,#e2e6ea);
				color: #18794e;
			}
		}
	}
}
</style>
