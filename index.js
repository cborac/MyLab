for (const i in document.querySelector(".group-a").children) {
     const el = document.querySelector(".group-a").children.item(i)

     el.setAttribute("style", `transform: rotateX(240deg) rotateZ(-155deg) translateY(${-26.5 * i}px)  translateX(${-4 * i}px);;`)
}

for (const i in document.querySelector(".group-b").children) {
     const el = document.querySelector(".group-b").children.item(i)

     el.setAttribute("style", `transform: rotateX(240deg) rotateZ(-155deg) translateX(${-58 * i}px) translateY(${-36 * i}px);`)
}


for (const i in document.querySelector(".group-c").children) {
     const el = document.querySelector(".group-c").children.item(i)

     el.setAttribute("style", `transform: rotateX(240deg) rotateZ(-155deg) translateY(${-26.5 * i}px) translateX(${-4 * i}px);`)
}


function highlightBoard(id) {
     document.querySelectorAll(".highlighted").forEach(x => x.classList.remove("highlighted"))
     document.getElementById(id).classList.add("highlighted")
}