const welcomeButton = document.getElementById("welcomeButton");
const welcomeContent = document.getElementById("welcomeContent");

welcomeButton.addEventListener("click", function () {

    welcomeContent.classList.toggle("show");

    if(welcomeContent.classList.contains("show")){
        welcomeButton.textContent = "CLOSE"
    } else{
        welcomeButton.textContent = "WHO WE ARE"
    }
})

// welcomeButton.addEventListener("click", function() {

//     welcomeContent.style.display = "block";
//     welcomeButton.style.display = "none";
// })

