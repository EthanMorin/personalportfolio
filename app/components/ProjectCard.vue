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
        }>();

        const { element: cardRef, isVisible } = useRevealObserver({ threshold: 0.1 });
</script>

<template>
        <div
                ref="cardRef"
                :class="[
                        'group relative rounded-2xl overflow-hidden border border-gray-100 bg-white/80 shadow-md transition-all duration-500 section-reveal card-tilt',
                        isVisible ? 'is-visible' : 'is-hidden',
                ]"
        >
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 transition-opacity duration-500 group-hover:via-purple-500/10 group-hover:to-pink-500/15"></div>
                <div class="relative">
                        <img
                                :src="props.project.image"
                                :alt="props.project.title"
                                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-gray-700 shadow-sm">
                                Case Study
                        </div>
                </div>
                <div class="relative p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">
                                {{ props.project.title }}
                        </h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">{{ props.project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                                <span
                                        v-for="tech in props.project.technologies"
                                        :key="tech"
                                        class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                                >
                                        {{ tech }}
                                </span>
                        </div>
                        <div class="flex gap-4 text-sm font-medium">
                                <a
                                        :href="props.project.github"
                                        class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                        <span>GitHub</span>
                                        <span aria-hidden="true">↗</span>
                                </a>
                                <a
                                        :href="props.project.live"
                                        class="inline-flex items-center gap-1 text-green-600 hover:text-green-700 transition-colors"
                                >
                                        <span>Live Demo</span>
                                        <span aria-hidden="true">↗</span>
                                </a>
                        </div>
                </div>
        </div>
</template>
