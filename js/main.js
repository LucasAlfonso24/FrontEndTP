function Modo1() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}

function right() {
    alert("Autor: Lucas Alfonso. Email: nahu24200@gmail.com");
  }