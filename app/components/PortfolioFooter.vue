<script setup lang="ts">
        const { element: footerRef, isVisible } = useRevealObserver({ threshold: 0.1 });
</script>

<template>
        <footer
                ref="footerRef"
                :class="[
                        'bg-gray-900 text-white py-8 section-reveal border-t border-white/10',
                        isVisible ? 'is-visible' : 'is-hidden',
                ]"
        >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p class="text-sm text-gray-300">
                                &copy; {{ new Date().getFullYear() }} Ethan Morin. Crafted with curiosity and care.
                        </p>
                </div>
        </footer>
</template>
