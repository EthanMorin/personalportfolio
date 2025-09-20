<script setup lang="ts">
        const { skills } = usePortfolioData();
        const { element: sectionRef, isVisible } = useRevealObserver({ threshold: 0.25 });

        const principles = [
                {
                        title: "Empathy first",
                        description:
                                "Products succeed when they champion the people who use them. I design flows around real stories and goals.",
                },
                {
                        title: "Ship with intention",
                        description:
                                "Every iteration should deliver measurable value. I partner closely with stakeholders to focus on outcomes, not just output.",
                },
                {
                        title: "Craft for longevity",
                        description:
                                "Clean architecture, accessible UI, and thoughtful documentation keep teams moving quickly long after launch.",
                },
        ];
</script>

<template>
        <section
                id="about"
                ref="sectionRef"
                :class="[
                        'py-16 bg-white section-reveal',
                        isVisible ? 'is-visible' : 'is-hidden',
                ]"
        >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                                <h2 class="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                        I'm a passionate full-stack engineer with 5+ years of experience building modern web applications. I love
                                        solving complex problems and creating solutions that make a real impact.
                                </p>
                        </div>

                        <div class="grid md:grid-cols-2 gap-12 items-start">
                                <div>
                                        <h3 class="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
                                        <div class="space-y-6">
                                                <div>
                                                        <h4 class="text-lg font-semibold text-gray-800 mb-3">Frontend</h4>
                                                        <div class="flex flex-wrap gap-2">
                                                                <span
                                                                        v-for="skill in skills.frontend"
                                                                        :key="skill"
                                                                        class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                                                >
                                                                        {{ skill }}
                                                                </span>
                                                        </div>
                                                </div>
                                                <div>
                                                        <h4 class="text-lg font-semibold text-gray-800 mb-3">Backend</h4>
                                                        <div class="flex flex-wrap gap-2">
                                                                <span
                                                                        v-for="skill in skills.backend"
                                                                        :key="skill"
                                                                        class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                                                >
                                                                        {{ skill }}
                                                                </span>
                                                        </div>
                                                </div>
                                                <div>
                                                        <h4 class="text-lg font-semibold text-gray-800 mb-3">
                                                                Tools & Technologies
                                                        </h4>
                                                        <div class="flex flex-wrap gap-2">
                                                                <span
                                                                        v-for="skill in skills.tools"
                                                                        :key="skill"
                                                                        class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                                                                >
                                                                        {{ skill }}
                                                                </span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                                        <h3 class="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
                                        <ul class="space-y-4 text-gray-700">
                                                <li class="flex items-start">
                                                        <span class="text-blue-500 mr-3">•</span>
                                                        <span>Build responsive and interactive web applications</span>
                                                </li>
                                                <li class="flex items-start">
                                                        <span class="text-blue-500 mr-3">•</span>
                                                        <span>Design and implement RESTful APIs and microservices</span>
                                                </li>
                                                <li class="flex items-start">
                                                        <span class="text-blue-500 mr-3">•</span>
                                                        <span>Optimize applications for performance and scalability</span>
                                                </li>
                                                <li class="flex items-start">
                                                        <span class="text-blue-500 mr-3">•</span>
                                                        <span>Collaborate with cross-functional teams and stakeholders</span>
                                                </li>
                                                <li class="flex items-start">
                                                        <span class="text-blue-500 mr-3">•</span>
                                                        <span>Mentor junior developers and share knowledge</span>
                                                </li>
                                        </ul>
                                </div>
                        </div>

                        <div class="mt-16">
                                <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Guiding Principles</h3>
                                <div class="grid gap-6 md:grid-cols-3">
                                        <div
                                                v-for="principle in principles"
                                                :key="principle.title"
                                                class="glass-card rounded-2xl p-6 text-left h-full"
                                        >
                                                <h4 class="text-lg font-semibold text-gray-900 mb-3">
                                                        {{ principle.title }}
                                                </h4>
                                                <p class="text-gray-600 leading-relaxed text-sm">
                                                        {{ principle.description }}
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>
