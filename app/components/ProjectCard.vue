<script setup lang="ts">
	interface Project {
		title: string;
		description: string;
		technologies: string[];
		image: string;
		github: string;
		live: string;
	}

	const props = defineProps<{
		project: Project;
		index?: number;
	}>();

	const { element: cardRef, isVisible } = useRevealObserver({ threshold: 0.1 });
</script>

<template>
	<div
		ref="cardRef"
		:class="[
			'group relative rounded-2xl overflow-hidden border border-gray-100 bg-white/80 shadow-md section-reveal card-tilt',
			'transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]',
			'hover:-translate-y-2 hover:rotate-[1.5deg] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]',
			'hover:scale-[1.02]',
			'origin-center',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
		:style="{
			transitionDelay: props.index ? `${props.index * 100}ms` : '0ms',
		}"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 transition-opacity duration-500 group-hover:via-purple-500/10 group-hover:to-pink-500/15"
		></div>
		<div class="relative overflow-hidden">
			<img
				:src="props.project.image"
				:alt="props.project.title"
				class="w-full h-48 object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:brightness-110"
			/>
			<div
				class="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-gray-700 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
			>
				Case Study
			</div>
		</div>
		<div class="relative p-6">
			<h3
				class="text-xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-blue-600"
			>
				{{ props.project.title }}
			</h3>
			<p
				class="text-gray-600 mb-4 leading-relaxed transition-all duration-300 group-hover:text-gray-700"
			>
				{{ props.project.description }}
			</p>
			<div class="flex flex-wrap gap-2 mb-4">
				<span
					v-for="(tech, techIndex) in props.project.technologies"
					:key="tech"
					class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105"
					:style="{ transitionDelay: `${techIndex * 50}ms` }"
				>
					{{ tech }}
				</span>
			</div>
			<div class="flex gap-4 text-sm font-medium">
				<a
					:href="props.project.github"
					class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
				>
					<span>GitHub</span>
					<span
						aria-hidden="true"
						class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						>↗</span
					>
				</a>
				<a
					:href="props.project.live"
					class="inline-flex items-center gap-1 text-green-600 hover:text-green-700 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
				>
					<span>Live Demo</span>
					<span
						aria-hidden="true"
						class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						>↗</span
					>
				</a>
			</div>
		</div>
	</div>
</template>
