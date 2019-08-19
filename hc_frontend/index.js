
const main = document.querySelector(".main")
document.addEventListener("DOMContentLoaded", () => {

	fetch("http://localhost:3000/api/v1/categories")
	.then(res => res.json())
	.then(categories => {
		let sidenav = document.querySelector(".sidenav")

		sidenav.innerHTML = ""
		
		categories.forEach(c => {
			let ahref = document.createElement("button")
			ahref.innerText = c.name
			sidenav.append(ahref)

			ahref.addEventListener("click", () =>{
				fill_contractors_menu(c.contractors)
			})
		})
		console.log(categories)
	})
	
}) //DOM




function fill_contractors_menu(contractors) {
	let sidenav = document.querySelector(".sidenav")

	sidenav.innerHTML = ""
	//debugger
	render_card(contractors[0])

	contractors.forEach(c => {
		let ahref = document.createElement("button")
		ahref.innerText = c.name
		sidenav.append(ahref)

		ahref.addEventListener("click", () =>{
			render_card(c)
		})
	})
	console.log(contractors)
	
}

// fetch("http://localhost:3000/api/v1/contractors")
// .then(res => res.json())
// .then(contractors => {
	
// 	let sidenav = document.querySelector(".sidenav")

// 	sidenav.innerHTML = ""
// 	render_card(contractors[0])

// 	contractors.forEach(c => {
// 		let ahref = document.createElement("button")
// 		ahref.innerText = c.name
// 		sidenav.append(ahref)


// 		ahref.addEventListener("click", () =>{
// 			render_card(c)
// 		})
// 	})
// 	console.log(contractors)
// })



function render_card(c) {
	const main = document.querySelector(".main")

	main.innerHTML = ""
	let h2 = document.createElement("h2")
	h2.innerText = c.name

	let h4 = document.createElement("h4")
	h4.innerText = "Price " + c.price + "$"

	let div_polar = document.createElement("div")
	div_polar.className = "polaroid"

	let img = document.createElement("img")
	img.src = c.img

	let div_cont = document.createElement("div")
	div_cont.className = "container"

	//div_cont.append(h2)
	div_polar.append(img)

	let intro = document.createElement("h4")
	intro.innerText = c.intro
	
	main.append( h2, div_polar, h4, intro)
} 