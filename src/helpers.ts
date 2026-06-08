export const sectionHelper = (ele: string) => {
  const element = document.getElementById(ele);
  if (element !== null) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
