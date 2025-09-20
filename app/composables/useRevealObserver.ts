import { onBeforeUnmount, onMounted, ref, watch } from "vue";

export const useRevealObserver = (options?: IntersectionObserverInit) => {
  const element = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  const createObserver = () => {
    if (!process.client || observer) {
      return;
    }

    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          obs.unobserve(entry.target);
        }
      });
    }, options ?? { threshold: 0.25, rootMargin: "0px 0px -40px 0px" });

    if (element.value) {
      observer.observe(element.value);
    }
  };

  onMounted(() => {
    createObserver();
  });

  watch(element, (el) => {
    if (el && observer) {
      observer.observe(el);
    } else if (el && !observer) {
      createObserver();
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });

  return {
    element,
    isVisible,
  };
};
