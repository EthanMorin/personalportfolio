<script setup lang="ts">
	const { scrollToSection } = useNavigation();
</script>

<template>
	<nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="text-2xl font-bold text-gray-900">Ethan Morin's Portfolio</div>
				<div class="hidden md:flex space-x-8">
					<button
						class="text-gray-600 hover:text-gray-900 transition-colors"
						@click="scrollToSection('home')"
					>
						Home
					</button>
					<button
						class="text-gray-600 hover:text-gray-900 transition-colors"
						@click="scrollToSection('about')"
					>
						About
					</button>
					<button
						class="text-gray-600 hover:text-gray-900 transition-colors"
						@click="scrollToSection('projects')"
					>
						Projects
					</button>
					<button
						class="text-gray-600 hover:text-gray-900 transition-colors"
						@click="scrollToSection('experience')"
					>
						Experience
					</button>
					<button
						class="text-gray-600 hover:text-gray-900 transition-colors"
						@click="scrollToSection('contact')"
					>
						Contact
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>
