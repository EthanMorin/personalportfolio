<script setup lang="ts">
	const { projects } = usePortfolioData();
</script>

<template>
	<section id="projects" class="py-16 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Here are some of my recent projects that showcase my skills and
					experience.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<ProjectCard
					v-for="project in projects"
					:key="project.title"
					:project="project"
				/>
			</div>
		</div>
	</section>
</template>
