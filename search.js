const fuse = new Fuse(Items, {
     keys: ["name"]
})

const list = document.getElementById("search-results-list")

document.querySelector(".searchbar > input").addEventListener("input", (e) => {
     const input = e.target
     const res = fuse.search(input.value).slice(0, 8)
     list.innerHTML = ""

     res.forEach(x => {
          const el = document.createElement("div")
          el.classList.add("search-result")
          el.innerHTML = `<p>${x.item.name}</p><p class="board-name">${x.item.board}</p>`
          el.onclick = () => {
               list.innerHTML = ""
               highlightBoard(x.item.board)
               input.value = `${x.item.name} (${x.item.board})`
          }

          list.append(el)
     })
})