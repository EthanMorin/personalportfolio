<script setup lang="ts">
	const siteUrl = useRuntimeConfig().public.siteUrl;
	const pageTitle = 'Full Stack Software Engineer Portfolio';
	const description =
		'Ethan Morin is a full stack software engineer in Salt Lake City building responsive web apps, APIs, cloud-ready products, and polished user experiences with Vue, React, Nuxt, Laravel, Node.js, and TypeScript.';
	const ogImage = `${siteUrl}/images/profile.jpeg`;

	useSeoMeta({
		title: pageTitle,
		description,
		robots: 'index, follow',
		author: 'Ethan Morin',
		ogTitle: `${pageTitle} | Ethan Morin`,
		ogDescription: description,
		ogType: 'profile',
		ogUrl: siteUrl,
		ogImage,
		ogImageAlt: 'Ethan Morin, full stack software engineer',
		twitterCard: 'summary_large_image',
		twitterTitle: `${pageTitle} | Ethan Morin`,
		twitterDescription: description,
		twitterImage: ogImage,
	});

	useHead({
		link: [
			{ rel: 'canonical', href: siteUrl },
		],
		script: [
			{
				type: 'application/ld+json',
				innerHTML: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: 'Ethan Morin',
					url: siteUrl,
					image: ogImage,
					jobTitle: 'Full Stack Software Engineer',
					email: 'mailto:ethanmorin2004@gmail.com',
					telephone: '+1-801-651-5559',
					address: {
						'@type': 'PostalAddress',
						addressLocality: 'Salt Lake City',
						addressRegion: 'UT',
						addressCountry: 'US',
					},
					sameAs: [
						'https://www.linkedin.com/in/ethan-morin/',
						'https://github.com/EthanMorin',
					],
					knowsAbout: [
						'Vue.js',
						'React',
						'Nuxt.js',
						'Laravel',
						'TypeScript',
						'Node.js',
						'Cloudflare',
						'Full stack web development',
					],
					hasOccupation: {
						'@type': 'Occupation',
						name: 'Software Engineer',
						skills:
							'Full stack development, frontend engineering, backend APIs, responsive design, database management, cloud deployment',
					},
				}),
			},
			{
				type: 'application/ld+json',
				innerHTML: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'WebSite',
					name: 'Ethan Morin Portfolio',
					url: siteUrl,
					description,
					inLanguage: 'en-US',
				}),
			},
		],
	});
</script>
<template>
	<div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
		<PortfolioNavigation />
		<main class="flex-1">
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</main>
		<FooterSection />
	</div>
</template>
