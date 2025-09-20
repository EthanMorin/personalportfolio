<script setup lang="ts">
	interface Experience {
		title: string;
		company: string;
		period: string;
		description: string;
	}

	const props = defineProps<{
		experience: Experience;
	}>();

	const { element: itemRef, isVisible } = useRevealObserver({
		threshold: 0.15,
	});
</script>

<template>
	<div
		ref="itemRef"
		:class="[
			'relative pl-8 sm:pl-10 section-reveal',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<span
			class="timeline-indicator absolute -left-[0.75rem] sm:-left-[0.95rem] top-[0.5rem] sm:top-[0.6rem] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_0_20px_rgba(124,58,237,0.45)] sm:shadow-[0_0_0_6px_rgba(59,130,246,0.15),0_0_25px_rgba(124,58,237,0.45)] animate-pulse-timeline"
			aria-hidden="true"
		></span>
		<div
			class="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-transform duration-500 hover:-translate-y-1"
		>
			<div
				class="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-2"
			>
				<h3 class="text-lg sm:text-xl font-bold text-gray-900">
					{{ props.experience.title }}
				</h3>
				<span class="text-xs sm:text-sm font-semibold text-blue-500">
					{{ props.experience.period }}
				</span>
			</div>
			<p class="text-blue-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
				{{ props.experience.company }}
			</p>
			<p class="text-gray-700 leading-relaxed text-sm sm:text-base">
				{{ props.experience.description }}
			</p>
		</div>
	</div>
</template>
