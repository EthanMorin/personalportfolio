<script setup lang="ts">
	const sections = ["home", "about", "projects", "experience", "contact"];
	const { scrollToSection, currentSection, observeSections, stopObserving } =
		useNavigation();
	const scrollProgress = ref(0);

	const updateProgress = () => {
		if (!process.client) {
			return;
		}

		const scrollTop = window.scrollY;
		const docHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress.value =
			docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
	};

	onMounted(() => {
		if (!process.client) {
			return;
		}

		observeSections(sections);
		updateProgress();
		window.addEventListener("scroll", updateProgress, { passive: true });
	});

	onBeforeUnmount(() => {
		if (!process.client) {
			return;
		}

		window.removeEventListener("scroll", updateProgress);
		stopObserving();
	});
</script>

<template>
	<nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative flex justify-between items-center h-16">
				<div class="text-2xl font-bold text-gray-900">
					Ethan Morin's Portfolio
				</div>
				<div class="hidden md:flex space-x-8">
					<button
						type="button"
						v-for="section in sections"
						:key="section"
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
