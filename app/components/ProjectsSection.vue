<script setup lang="ts">
	const { projects } = usePortfolioData();
	const { scrollToSection } = useNavigation();
	const { element: sectionRef, isVisible } = useRevealObserver({
		threshold: 0.2,
	});
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
			<div class="text-center mb-16">
				<span
					class="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4"
				>
					Selected Work
				</span>
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Here are some of my recent projects that showcase my skills and
					experience. Each one balances product vision with technical
					excellence.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<ProjectCard
					v-for="project in projects"
					:key="project.title"
					:project="project"
				/>
			</div>

			<div class="mt-16 max-w-4xl mx-auto">
				<div
					class="glass-card rounded-3xl p-8 sm:p-10 text-center bg-gradient-to-br from-white/90 to-white/65 border border-slate-200/25 backdrop-blur-xl shadow-[0_18px_36px_-24px_rgba(30,64,175,0.5)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_22px_48px_-24px_rgba(30,64,175,0.55)]"
				>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">
						Need something built differently?
					</h3>
					<p class="text-gray-600 mb-6">
						I love collaborating on ambitious ideas—whether it's breathing life
						into an MVP, scaling an existing product, or crafting a polished
						design system.
					</p>
					<button
						type="button"
						class="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl btn-glow relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)]"
						@click="scrollToSection('contact')"
					>
						Let's craft your next launch
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
