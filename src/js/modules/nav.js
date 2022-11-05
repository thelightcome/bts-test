export default (wrapperClass) => {
  const nav = document.querySelector(wrapperClass);
  const navBtn = nav.querySelector(wrapperClass + "__btn");
  const navCollapse = nav.querySelector(wrapperClass + "__collapse");

  navBtn.addEventListener("click", () => {
    navCollapse.classList.toggle("active");
  });
}