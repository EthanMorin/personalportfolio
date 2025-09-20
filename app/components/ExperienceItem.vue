<script setup lang="ts">
	interface Experience {
		title: string;
		company: string;
		period: string;
		description: string;
	}

	defineProps<{
		experience: Experience;
	}>();
</script>

<template>
	<div class="relative pl-8 border-l-2 border-blue-200">
		<div class="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
		<div class="bg-gray-50 rounded-lg p-6">
			<h3 class="text-xl font-bold text-gray-900 mb-1">
				{{ experience.title }}
			</h3>
			<p class="text-blue-600 font-semibold mb-2">
				{{ experience.company }}
			</p>
			<p class="text-gray-600 mb-3">{{ experience.period }}</p>
			<p class="text-gray-700">{{ experience.description }}</p>
		</div>
	</div>
</template>
