<script setup lang="ts">
	const sections = ['home', 'about', 'projects', 'experience', 'contact'];
	const { scrollToSection, currentSection, observeSections, stopObserving } =
		useNavigation();
	const scrollProgress = ref(0);
	const isMobileMenuOpen = ref(false);

	const updateProgress = () => {
		if (!import.meta.client) {
			return;
		}

		const scrollTop = window.scrollY;
		const docHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress.value =
			docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
	};

	const toggleMobileMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	};

	const handleSectionClick = (section: string) => {
		scrollToSection(section);
		isMobileMenuOpen.value = false;
	};

	onMounted(() => {
		if (!import.meta.client) {
			return;
		}

		observeSections(sections);
		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
	});

	onBeforeUnmount(() => {
		if (!import.meta.client) {
			return;
		}

		window.removeEventListener('scroll', updateProgress);
		stopObserving();
	});
</script>

<template>
	<nav class="fixed top-0 w-full bg-white/70 backdrop-blur-sm shadow-sm z-40">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative flex justify-between items-center h-16">
				<div class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
					Ethan Morin's Portfolio
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex space-x-8">
					<button
						v-for="section in sections"
						:key="section"
						type="button"
						:class="[
							'relative text-sm font-medium transition-colors',
							currentSection === section
								? 'text-gray-900'
								: 'text-gray-600 hover:text-gray-900',
						]"
						:aria-current="currentSection === section ? 'page' : undefined"
						@click="scrollToSection(section)"
					>
						<span class="capitalize">{{ section }}</span>
						<span
							v-if="currentSection === section"
							class="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
						/>
					</button>
				</div>

				<!-- Mobile Menu Button -->
				<button
					type="button"
					class="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
					:aria-expanded="isMobileMenuOpen"
					aria-label="Toggle mobile menu"
					@click="toggleMobileMenu"
				>
					<svg
						class="w-6 h-6"
						:class="{ 'rotate-90': isMobileMenuOpen }"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							v-if="!isMobileMenuOpen"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
						<path
							v-else
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Mobile Menu -->
			<div
				class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/60"
				:class="[
					isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
				]"
			>
				<div class="px-4 py-4 space-y-2">
					<button
						v-for="section in sections"
						:key="section"
						type="button"
						:class="[
							'w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors',
							currentSection === section
								? 'text-blue-600 bg-blue-50'
								: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
						]"
						:aria-current="currentSection === section ? 'page' : undefined"
						@click="handleSectionClick(section)"
					>
						<span class="capitalize">{{ section }}</span>
					</button>
				</div>
			</div>
		</div>
		<div class="h-0.5 w-full bg-gray-200/60">
			<div
				class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
				:style="{ width: `${scrollProgress}%` }"
			/>
		</div>
	</nav>
</template>
