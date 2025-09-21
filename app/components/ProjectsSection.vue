<script setup lang="ts">
	const { projects } = usePortfolioData();
	const { scrollToSection } = useNavigation();
	const { element: sectionRef, isVisible } = useRevealObserver({
		threshold: 0.2,
	});

	// Dynamic grid classes based on project count
	const getGridClasses = () => {
		const projectCount = projects.length;

		if (projectCount === 1) {
			return 'grid grid-cols-1 max-w-2xl mx-auto gap-6 sm:gap-8';
		} else if (projectCount === 2) {
			return 'grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8';
		} else {
			return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8';
		}
	};
</script>

<template>
	<section
		id="projects"
		ref="sectionRef"
		:class="[
			'py-16 bg-gray-50 section-reveal',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12 sm:mb-16">
				<span
					class="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
				>
					Selected Work
				</span>
				<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
					Featured Projects
				</h2>
				<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
					Here are some of my recent projects that showcase my skills and
					experience. Each one balances product vision with technical
					excellence.
				</p>
			</div>

			<div :class="getGridClasses()">
				<ProjectCard
					v-for="(project, index) in projects"
					:key="project.title"
					:project="project"
					:index="index"
				/>
			</div>

			<div class="mt-12 sm:mt-16 max-w-4xl mx-auto">
				<div
					class="glass-card rounded-3xl p-6 sm:p-8 md:p-10 text-center bg-gradient-to-br from-white/90 to-white/65 border border-slate-200/25 backdrop-blur-xl shadow-[0_18px_36px_-24px_rgba(30,64,175,0.5)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_22px_48px_-24px_rgba(30,64,175,0.55)]"
				>
					<h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
						Need something built differently?
					</h3>
					<p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
						I love collaborating on ambitious ideas—whether it's breathing life
						into an MVP, scaling an existing product, or crafting a polished
						design system.
					</p>
					<button
						type="button"
						class="inline-flex items-center justify-center bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-xl btn-glow relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)] text-sm sm:text-base font-medium min-h-[44px]"
						@click="scrollToSection('contact')"
					>
						Let's craft your next launch
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
