
/*===========certificate part========*/
function openModal(imageSrc){
    document.getElementById("certificateModal").style.display = "flex";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal(){
    document.getElementById("certificateModal").style.display = "none";
}

window.onclick = function(event){
    let modal = document.getElementById("certificateModal");

    if(event.target == modal){
        modal.style.display = "none";
    }
}

/*===========contact part========*/
const form=document.getElementById("contactForm");
form.addEventListener("submit",function(e){
e.preventDefault();
alert("Thank You!\n\nYour message has been sent successfully.");
form.reset();
});

/*===========Home part========*/
const viewBtn = document.querySelector(".view-work-btn");

viewBtn.addEventListener("click", function () {
    document.documentElement.style.scrollBehavior = "auto";

    document.getElementById("projects").scrollIntoView();

    setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
});

/*=========== Light Mode ========*/
const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});