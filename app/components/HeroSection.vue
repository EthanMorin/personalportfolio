<script setup lang="ts">
	const { scrollToSection } = useNavigation();

	const heroBadges = [
		'Full Stack Developer',
		'Software Engineer',
		'Cloud Engineer',
		'Graphic Designer',
	];

	const heroHighlights = [
		{ value: '1.5+', label: 'Years of hands-on experience' },
		{ value: '4', label: 'Unique Internships' },
		{ value: '12+', label: 'Fluent Programming Languages' },
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
			'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
			'bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.2),transparent_55%)]',
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
				<div
					class="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mb-8 place-items-center"
				>
					<span
						v-for="badge in heroBadges"
						:key="badge"
						class="px-3 py-1 sm:px-4 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 shadow-sm backdrop-blur text-center w-full h-8 sm:w-auto sm:h-auto flex items-center justify-center"
					>
						{{ badge }}
					</span>
				</div>
				<div class="relative mb-8">
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse-timeline"></div>
					<div class="relative w-40 h-40 md:w-52 md:h-52 mx-auto">
						<div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-spin"></div>
						<div class="absolute inset-[3px] rounded-full overflow-hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
							<NuxtImg 
								src="/images/MT-logo-notext.svg" 
								class="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
								alt="MT Logo"
							/>
						</div>
					</div>
				</div>
				<div class="mb-10">
					<h1
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-3 sm:mb-4 tracking-tight px-4"
					>
						<span class="animate-gradient-text">Ethan Morin</span>
					</h1>
					<h2
						class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 mb-4 sm:mb-6 px-4"
					>
						Software Engineer crafting delightful end-to-end experiences
					</h2>
					<p
						class="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed"
					>
						Experienced in building and designing software solutions from the
						ground up, I use a variety of technologies to meet the unique needs
						of clients and teams. My work combines industry best practices with
						Agile methodologies, ensuring efficient delivery and results that
						make a difference.
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
							class="border border-blue-400 text-blue-300 px-6 sm:px-8 py-3 sm:py-3 rounded-lg hover:bg-blue-950/50 transition-all duration-300 btn-glow relative overflow-hidden hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.5)] text-sm sm:text-base font-medium min-h-[44px] flex items-center justify-center"
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
						class="glass-card rounded-2xl px-6 py-5 text-left bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_18px_36px_-24px_rgba(30,64,175,0.35)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_22px_48px_-24px_rgba(30,64,175,0.45)] w-full sm:w-64 flex-shrink-0"
					>
						<p class="text-3xl font-extrabold text-slate-100 mb-1">
							{{ highlight.value }}
						</p>
						<p class="text-sm uppercase tracking-wide text-slate-500">
							{{ highlight.label }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Scroll indicator at bottom using Tailwind -->
		<div class="hidden md:flex justify-center text-slate-500 py-6">
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
