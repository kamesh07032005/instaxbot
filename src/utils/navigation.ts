export const handleGetStarted = () => {
  window.open("https://app.instaxbot.com/register", "_blank");
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
