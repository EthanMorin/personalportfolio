<script setup lang="ts">
	const { scrollToSection } = useNavigation();
	const profileImage = "/images/profile.jpeg";
</script>

<template>
	<section
		id="home"
		class="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<div class="mb-8">
					<img
						:src="profileImage"
						alt="Ethan Morin"
						class="w-32 h-32 mx-auto my-6 rounded-full object-cover"
						loading="lazy"
					/>
					<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
						Ethan Morin
					</h1>
					<h2 class="text-2xl md:text-3xl text-gray-600 mb-6">
						Software Engineer | Full Stack Engineer
					</h2>
					<p class="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
						Passionate about building scalable web applications and creating
						exceptional user experiences. I specialize in modern JavaScript
						frameworks, cloud technologies, and full-stack development.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
							@click="scrollToSection('projects')"
						>
							View My Work
						</button>
						<button
							class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
							@click="scrollToSection('contact')"
						>
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
