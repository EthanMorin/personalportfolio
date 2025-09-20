import { onBeforeUnmount, onMounted } from "vue";

export const useNavigation = () => {
  const currentSection = useState("current-section", () => "home");
  const observer = useState<IntersectionObserver | null>("section-observer", () => null);
  const observedIds = useState<string[]>("observed-ids", () => []);

  const handleHashNavigation = () => {
    if (!process.client) {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      currentSection.value = hash;
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (!process.client) {
      return;
    }

    currentSection.value = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const observeSections = (sectionIds: string[]) => {
    if (!process.client) {
      return;
    }

    if (!observer.value) {
      observer.value = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((entry) => entry.isIntersecting);
          if (!visibleEntries.length) {
            return;
          }

          const mostVisible = visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];
          const sectionId = mostVisible.target.getAttribute("id");
          if (sectionId) {
            currentSection.value = sectionId;
          }
        },
        { threshold: 0.35 },
      );
    }

    requestAnimationFrame(() => {
      sectionIds.forEach((id) => {
        if (observedIds.value.includes(id)) {
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          observer.value?.observe(element);
          observedIds.value = [...observedIds.value, id];
        }
      });
    });
  };

  const stopObserving = () => {
    observer.value?.disconnect();
    observer.value = null;
    observedIds.value = [];
  };

  onMounted(() => {
    if (!process.client) {
      return;
    }

    window.addEventListener("hashchange", handleHashNavigation, { passive: true });
    handleHashNavigation();
  });

  onBeforeUnmount(() => {
    if (!process.client) {
      return;
    }

    window.removeEventListener("hashchange", handleHashNavigation);
  });

  return {
    currentSection,
    observeSections,
    scrollToSection,
    stopObserving,
  };
};
