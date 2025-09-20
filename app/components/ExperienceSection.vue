<script setup lang="ts">
        const { experience } = usePortfolioData();
        const { element: sectionRef, isVisible } = useRevealObserver({ threshold: 0.2 });
</script>

<template>
        <section
                id="experience"
                ref="sectionRef"
                :class="[
                        'py-16 bg-white section-reveal',
                        isVisible ? 'is-visible' : 'is-hidden',
                ]"
        >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                                <span class="inline-flex items-center px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                                        Career Journey
                                </span>
                                <h2 class="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
                                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                        My professional journey in software development is anchored in collaboration, rapid experimentation, and
                                        continuous learning.
                                </p>
                        </div>

                        <div class="max-w-3xl mx-auto">
                                <div class="relative pl-6">
                                        <span class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></span>
                                        <div class="space-y-10">
                                                <ExperienceItem
                                                        v-for="(exp, index) in experience"
                                                        :key="index"
                                                        :experience="exp"
                                                />
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>
