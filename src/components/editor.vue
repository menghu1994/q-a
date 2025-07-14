<script setup lang="ts">
import Quill, { type QuillOptions } from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { onMounted, ref } from "vue";

const props = defineProps({
	text: { type: String, default: '' }
})


let quill: Quill;
const editor = ref<any>(null);

const options: QuillOptions = {
	placeholder: 'Compose an epic...',
	modules: {
		toolbar: [
			[{ 'header': [1, 2, 3, 4, false] }],
			['bold', 'italic', 'underline', 'strike'],
			['blockquote', 'code-block'],
			['image', 'video'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
			[{ 'color': [] }, { 'background': [] }],
			[{ 'align': [] }],
			['clean']
		],
		history: {
			delay: 2500,
			userOnly: true
		},
		syntax: true
	},
	theme: 'snow'
};

onMounted(() => {
	quill = new Quill(editor.value, options);
	quill.root.innerHTML = props.text;
	quill.on("text-change", update);
})

const update = () => {
	// this.$emit(
	//   "update:modelValue",
	quill.getText() ? quill.root.innerHTML : ""
	console.error(quill.root.innerHTML, '1')
	// );
}
</script>

<template>
	<div ref="editor">
	</div>
	<div class="flex flex-row-reverse">
		<button
			class="border border-slate-300 m-2 py-1 px-2 rounded text-sm cursor-pointer hover:border-slate-600">提交</button>
	</div>
</template>

<style lang="scss">
.ql-toolbar {
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
}

.ql-container {
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	min-height: 200px
}
</style>