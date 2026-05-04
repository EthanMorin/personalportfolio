<script setup lang="ts">
	const { experience } = usePortfolioData();
	const { element: sectionRef, isVisible } = useRevealObserver({
		threshold: 0.2,
	});
</script>

<template>
	<section
		id="experience"
		ref="sectionRef"
		:class="[
			'py-16 bg-slate-950 section-reveal',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12 sm:mb-16">
				<span
					class="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-indigo-950/70 text-indigo-300 border border-indigo-500/20 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
				>
					Career Journey
				</span>
				<h2 class="text-3xl sm:text-4xl font-bold text-slate-100 mb-3 sm:mb-4">
					Experience
				</h2>
				<p class="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
					My professional journey in software development is anchored in
					collaboration, rapid experimentation, and continuous learning.
				</p>
			</div>

			<div class="max-w-3xl mx-auto">
				<div class="relative pl-4 sm:pl-6">
					<span
						class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/50 to-transparent"
					></span>
					<div class="space-y-8 sm:space-y-10">
						<ExperienceItem
							v-for="(exp, index) in experience"
							:key="index"
							:experience="exp"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
