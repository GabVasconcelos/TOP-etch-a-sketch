const container = document.querySelector(".container")
const clearbutton = document.querySelector(".clear")

function clamp(min, max, num) {
	return Math.min(Math.max(num, min), max)
}

function drawcanvas(size) {
	container.innerHTML = ""
	container.style["grid-template-columns"] = `repeat(${size}, 10px)`
	container.style["grid-template-rows"] = `repeat(${size}, 10px)`
	for (let x=1; x<=size; x++) {
		for (let y=1; y<=size; y++){
			let div = document.createElement("div")
			let color = 255
			div.classList.add("pixel")
			container.appendChild(div)
			div.addEventListener("mouseover", (event) => {
				event.target.classList.add("hover")
				color -= 25.5
				div.style.backgroundColor = `rgba(0, ${color}, ${color}, 1)`
			})
			// div.addEventListener("mouseout", (event) => {
			// 	event.target.classList.remove("hover")
			// })
		}
	}
}

clearbutton.addEventListener("click", event => {
	let size = prompt("What size do you want now?")
	size = Number(size) && clamp(16, 100, size) || 32
	drawcanvas(size)
})

drawcanvas(32)