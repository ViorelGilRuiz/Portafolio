document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
/** @param {boolean} open */
function setMenu(open) {
  menuButton?.setAttribute("aria-expanded", String(open));
  navigation?.classList.toggle("open", open);
}
menuButton?.addEventListener("click", () =>
  setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
);
navigation
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    if (menuButton instanceof HTMLElement) menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (
    event.target instanceof Node &&
    !navigation?.contains(event.target) &&
    !menuButton?.contains(event.target)
  )
    setMenu(false);
});
matchMedia("(min-width: 761px)").addEventListener("change", () =>
  setMenu(false),
);
const navLinks = [...document.querySelectorAll("#main-nav a")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    },
    { rootMargin: "-15% 0px -60% 0px" },
  );
  navLinks.forEach((link) => {
    const selector = link.getAttribute("href");
    const section = selector ? document.querySelector(selector) : null;
    if (section) observer.observe(section);
  });
}
