<script setup lang="ts">
	interface Project {
		title: string;
		description: string;
		technologies: string[];
		image: string;
		github: string;
		live: string;
	}

	defineProps<{
		project: Project;
	}>();
</script>

<template>
	<div
		class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
	>
		<img
			:src="project.image"
			:alt="project.title"
			class="w-full h-48 object-cover"
		/>
		<div class="p-6">
			<h3 class="text-xl font-bold text-gray-900 mb-2">
				{{ project.title }}
			</h3>
			<p class="text-gray-600 mb-4">{{ project.description }}</p>
			<div class="flex flex-wrap gap-2 mb-4">
				<span
					v-for="tech in project.technologies"
					:key="tech"
					class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
				>
					{{ tech }}
				</span>
			</div>
			<div class="flex gap-4">
				<a
					:href="project.github"
					class="text-blue-600 hover:text-blue-800 font-medium"
					>GitHub</a
				>
				<a
					:href="project.live"
					class="text-green-600 hover:text-green-800 font-medium"
					>Live Demo</a
				>
			</div>
		</div>
	</div>
</template>
