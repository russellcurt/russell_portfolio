export const scrollToRef = (ref) => {
  if (ref.current) {
    const elementOffsetTop = ref.current.offsetTop;
    const currentScroll = window.scrollY;
    const offset =
      elementOffsetTop > currentScroll ? 0 : 120.5;

    window.scrollTo({
      top: elementOffsetTop - offset + 1,
      behavior: "smooth",
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

// is this even needed anymore?
export const scrollToBottom = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "auto",
  });
};
