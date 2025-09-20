<script setup lang="ts">
	const { scrollToSection } = useNavigation();
	const profileImage = "/images/profile.jpeg";

	const heroBadges = [
		"Human-centered engineering",
		"Cloud-native architecture",
		"Design systems craftsmanship",
	];

	const heroHighlights = [
		{ value: "5+", label: "Years of hands-on experience" },
		{ value: "20+", label: "Products & features shipped" },
		{ value: "∞", label: "Curiosity, learning, iterating" },
	];

	const { element: sectionRef, isVisible } = useRevealObserver({
		threshold: 0.2,
	});
</script>

<template>
	<section
		id="home"
		ref="sectionRef"
		:class="[
			'relative overflow-hidden pt-24 pb-20 hero-gradient section-reveal',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<div class="absolute inset-0 pointer-events-none">
			<span class="hero-orb hero-orb--blue w-72 h-72 -top-20 -left-10"></span>
			<span
				class="hero-orb hero-orb--purple w-80 h-80 -bottom-24 left-1/2"
			></span>
			<span class="hero-orb hero-orb--pink w-64 h-64 -right-10 top-10"></span>
		</div>

		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<div class="flex flex-wrap justify-center gap-3 mb-8">
					<span
						v-for="badge in heroBadges"
						:key="badge"
						class="px-4 py-1 rounded-full bg-white/70 border border-white/40 text-sm font-medium text-gray-700 shadow-sm backdrop-blur"
					>
						{{ badge }}
					</span>
				</div>

				<div class="mb-10">
					<img
						:src="profileImage"
						alt="Ethan Morin"
						class="w-36 h-36 mx-auto my-6 rounded-full object-cover shadow-xl ring-4 ring-white/70"
						loading="lazy"
					/>
					<h1
						class="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
					>
						Hi, I'm <span class="animate-gradient-text">Ethan Morin</span>
					</h1>
					<h2 class="text-2xl md:text-3xl text-gray-600 mb-6">
						Software Engineer crafting delightful end-to-end experiences
					</h2>
					<p class="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
						I build resilient web platforms with an eye for detail,
						accessibility, and measurable impact. From shaping product strategy
						to scaling cloud-native systems, I help teams ship work that stands
						out.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							type="button"
							class="bg-blue-600 text-white px-8 py-3 rounded-lg btn-glow"
							@click="scrollToSection('projects')"
						>
							View My Work
						</button>
						<button
							type="button"
							class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors btn-glow"
							@click="scrollToSection('contact')"
						>
							Get In Touch
						</button>
					</div>
				</div>

				<div class="mt-14 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
					<div
						v-for="highlight in heroHighlights"
						:key="highlight.label"
						class="glass-card rounded-2xl px-6 py-5 text-left"
					>
						<p class="text-3xl font-extrabold text-gray-900 mb-1">
							{{ highlight.value }}
						</p>
						<p class="text-sm uppercase tracking-wide text-gray-500">
							{{ highlight.label }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<div
			class="absolute bottom-6 inset-x-0 hidden md:flex justify-center text-gray-500"
		>
			<div
				class="flex flex-col items-center text-xs font-semibold tracking-widest"
			>
				<span class="mb-2 uppercase">Scroll</span>
				<span
					class="h-12 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse"
				></span>
			</div>
		</div>
	</section>
</template>
