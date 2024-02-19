const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
    panel.addEventListener("click", ()=> {
        removeClick()
        panel.classList.add("active")
    })
    
});

function removeClick () {
    panels.forEach((panel) =>{
        panel.classList.remove("active")
    })
}
