const backButton1 = document.getElementById("volverbutton_desk");
const backButton2 = document.getElementById("volverbutton_mob");

function pageBack() {
	window.history.back();
}

backButton1.addEventListener("click", pageBack);
backButton2.addEventListener("click", pageBack);