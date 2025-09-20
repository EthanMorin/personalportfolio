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

        const { element: itemRef, isVisible } = useRevealObserver({ threshold: 0.15 });
</script>

<template>
        <div
                ref="itemRef"
                :class="[
                        'relative pl-10 section-reveal',
                        isVisible ? 'is-visible' : 'is-hidden',
                ]"
        >
                <span class="timeline-indicator" aria-hidden="true"></span>
                <div class="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 transition-transform duration-500 hover:-translate-y-1">
                        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
                                <h3 class="text-xl font-bold text-gray-900">
                                        {{ props.experience.title }}
                                </h3>
                                <span class="text-sm font-semibold text-blue-500">
                                        {{ props.experience.period }}
                                </span>
                        </div>
                        <p class="text-blue-600 font-semibold mb-3">
                                {{ props.experience.company }}
                        </p>
                        <p class="text-gray-700 leading-relaxed">
                                {{ props.experience.description }}
                        </p>
                </div>
        </div>
</template>
