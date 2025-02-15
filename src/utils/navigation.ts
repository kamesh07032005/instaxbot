export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const navbar = document.querySelector("nav");
  if (element && navbar) {
    const navbarHeight = navbar.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - (navbarHeight + 16);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleGetStarted = () => {
  // Update this with your actual signup/onboarding URL
  window.location.href = "/signup";
};
