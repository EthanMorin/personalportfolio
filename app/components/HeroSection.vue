<script setup lang="ts">
	const { scrollToSection } = useNavigation();
	const profileImage = '/images/profile.jpeg';

	const heroBadges = [
		'Human-centered engineering',
		'Cloud-native architecture',
		'Design systems craftsmanship',
	];

	const heroHighlights = [
		{ value: '5+', label: 'Years of hands-on experience' },
		{ value: '20+', label: 'Products & features shipped' },
		{ value: '∞', label: 'Curiosity, learning, iterating' },
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
			'relative overflow-hidden min-h-screen section-reveal flex flex-col',
			'bg-gradient-to-br from-blue-50 via-purple-50 to-white',
			'bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.25),transparent_55%)]',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<!-- Background orbs - keeping absolute positioning for decorative elements -->
		<div class="absolute inset-0 pointer-events-none">
			<span
				class="hero-orb hero-orb--blue absolute w-72 h-72 -top-20 -left-10 rounded-full opacity-60 blur-0 animate-float"
			></span>
			<span
				class="hero-orb hero-orb--purple absolute w-80 h-80 -bottom-24 left-1/2 rounded-full opacity-60 blur-0 animate-float"
				style="animation-delay: 3s"
			></span>
			<span
				class="hero-orb hero-orb--pink absolute w-64 h-64 -right-10 top-10 rounded-full opacity-60 blur-0 animate-float"
				style="animation-delay: 6s"
			></span>
		</div>

		<!-- Main content using Tailwind flexbox utilities -->
		<div
			class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center"
		>
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
							class="bg-blue-600 text-white px-8 py-3 rounded-lg btn-glow relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)]"
							@click="scrollToSection('projects')"
						>
							View My Work
						</button>
						<button
							type="button"
							class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 btn-glow relative overflow-hidden hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)]"
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
						class="glass-card rounded-2xl px-6 py-5 text-left bg-gradient-to-br from-white/90 to-white/65 border border-slate-200/25 backdrop-blur-xl shadow-[0_18px_36px_-24px_rgba(30,64,175,0.5)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_22px_48px_-24px_rgba(30,64,175,0.55)]"
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

		<!-- Scroll indicator at bottom using Tailwind -->
		<div class="hidden md:flex justify-center text-gray-500 py-6">
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
