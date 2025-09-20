<script setup lang="ts">
	const { experience } = usePortfolioData();
</script>

<template>
	<section id="experience" class="py-16 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					My professional journey in software development.
				</p>
			</div>

			<div class="max-w-3xl mx-auto">
				<div class="space-y-8">
					<ExperienceItem
						v-for="(exp, index) in experience"
						:key="index"
						:experience="exp"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
