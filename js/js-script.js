const scrollToForm = () => {
    document.querySelector('#formwork').scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}
document.querySelector('#currentYear').innerHTML = new Date().getFullYear();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }