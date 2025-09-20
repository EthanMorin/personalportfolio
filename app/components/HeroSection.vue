<script setup lang="ts">
	const { scrollToSection } = useNavigation();
	const profileImage = '/images/profile.jpeg';

	const heroBadges = [
		'Human-centered engineering',
		'Cloud-native architecture',
		'Design systems craftsmanship',
	];

	const heroHighlights = [
		{ value: '1+', label: 'Years of hands-on experience' },
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
		<!-- Background orbs - CSS Grid layout for better mobile support -->
		<div class="absolute inset-0 pointer-events-none overflow-hidden z-10">
			<div class="h-full w-full grid grid-cols-12 grid-rows-12 gap-0">
				<!-- Blue orb - top left area -->
				<div
					class="col-span-4 sm:col-span-3 row-span-4 sm:row-span-3 flex items-start justify-start"
				>
					<div
						class="hero-orb hero-orb--blue w-full h-full max-w-32 sm:max-w-40 md:max-w-48 rounded-full opacity-40 sm:opacity-60 animate-float"
					/>
				</div>

				<!-- Spacer for top center -->
				<div class="col-span-4 sm:col-span-6 row-span-4 sm:row-span-3"></div>

				<!-- Pink orb - top right area -->
				<div
					class="col-span-4 sm:col-span-3 row-span-4 sm:row-span-3 flex items-start justify-end"
				>
					<div
						class="hero-orb hero-orb--pink w-full h-full max-w-24 sm:max-w-32 md:max-w-40 rounded-full opacity-40 sm:opacity-60 animate-float"
						style="animation-delay: 6s"
					/>
				</div>

				<!-- Spacer for middle area -->
				<div class="col-span-12 row-span-4 sm:row-span-6"></div>

				<!-- Purple orb - bottom center area -->
				<div
					class="col-span-12 sm:col-span-6 sm:col-start-4 row-span-4 sm:row-span-3 flex items-end justify-center"
				>
					<div
						class="hero-orb hero-orb--purple w-full h-full max-w-36 sm:max-w-44 md:max-w-52 rounded-full opacity-40 sm:opacity-60 animate-float"
						style="animation-delay: 3s"
					/>
				</div>
			</div>
		</div>

		<!-- Main content using Tailwind flexbox utilities -->
		<div
			class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center z-20 pt-20"
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
						class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto my-4 sm:my-6 rounded-full object-cover shadow-xl ring-4 ring-white/70"
						loading="lazy"
					/>
					<h1
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight px-4"
					>
						Hi, I'm <span class="animate-gradient-text">Ethan Morin</span>
					</h1>
					<h2
						class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 sm:mb-6 px-4"
					>
						Software Engineer crafting delightful end-to-end experiences
					</h2>
					<p
						class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed"
					>
						I build resilient web platforms with an eye for detail,
						accessibility, and measurable impact. From shaping product strategy
						to scaling cloud-native systems, I help teams ship work that stands
						out.
					</p>
					<div
						class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
					>
						<button
							type="button"
							class="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg btn-glow relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)] text-sm sm:text-base font-medium min-h-[44px] flex items-center justify-center"
							@click="scrollToSection('projects')"
						>
							View My Work
						</button>
						<button
							type="button"
							class="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 btn-glow relative overflow-hidden hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)] text-sm sm:text-base font-medium min-h-[44px] flex items-center justify-center"
							@click="scrollToSection('contact')"
						>
							Get In Touch
						</button>
					</div>
				</div>

				<div
					class="mt-14 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
				>
					<div
						v-for="highlight in heroHighlights"
						:key="highlight.label"
						class="glass-card rounded-2xl px-6 py-5 text-left bg-gradient-to-br from-white/90 to-white/65 border border-slate-200/25 backdrop-blur-xl shadow-[0_18px_36px_-24px_rgba(30,64,175,0.5)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_22px_48px_-24px_rgba(30,64,175,0.55)] w-full sm:w-64 flex-shrink-0"
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
				/>
			</div>
		</div>
	</section>
</template>
