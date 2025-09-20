export const useNavigation = () => {
  const currentSection = ref("home");

  const scrollToSection = (sectionId: string) => {
    currentSection.value = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    currentSection,
    scrollToSection,
  };
};
