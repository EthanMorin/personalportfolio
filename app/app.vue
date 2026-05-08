<script setup lang="ts">
	useHead({
		htmlAttrs: {
			lang: 'en',
		},
		titleTemplate: (titleChunk) =>
			titleChunk ? `${titleChunk} | Ethan Morin` : 'Ethan Morin | Full Stack Software Engineer',
		link: [
			{ rel: 'icon', href: '/favicon.ico', sizes: 'any' },
		],
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
			{ name: 'theme-color', content: '#020617' },
		],
	});
</script>

<template>
	<div>
		<UApp>
			<NuxtPage />
		</UApp>
	</div>
</template>

<style>
	@import "tailwindcss";
</style>
