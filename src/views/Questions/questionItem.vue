<template>
	<div class="flex flex-col gap-2">
		<div class="w-full">
			<p v-if="props.type" class="float-left mr-2 text-rose-800">[ {{ getType }} ]</p>
			<p class="">{{ props.question }}</p>
		</div>
		<div class="flex justify-end gap-2">
			<Icon class="cursor-pointer" icon="streamline-stickies-color:love" width="30" height="30" />
			<Icon class="cursor-pointer" icon="streamline-stickies-color:pen" width="30" height="30" />
			<Icon class="cursor-pointer" icon="streamline-stickies-color:star" width="30" height="30" />
			<Icon class="cursor-pointer" icon="streamline-stickies-color:education-degree"  width="30" height="30" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from "@iconify/vue";

const props = defineProps({
	type: { type: String, default: '' },
	question: { type: String, default: '', required: true },
})

const getType = computed(() => props.type.toLocaleLowerCase())
</script>

<style lang="scss"></style>