window.addEventListener("click", (e) => {
    const logo = document.querySelector("#canard");
    logo.style.position = "absolute";
    console.log(e);
    logo.style.top = `${e.pageY}px`
    logo.style.left = `${e.pageX}px`
    logo.style.display = "block"
})





