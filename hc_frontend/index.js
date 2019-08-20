contractorURL = "http://localhost:3000/api/v1/contractors"
clientURL ="http://localhost:3000/api/v1/clients"
apptURL = "http://localhost:3000/api/v1/appointments"
const init_fund = 100

const main = document.querySelector(".main")
let chosen = []
let my_menu = document.querySelector(".my_menu")

document.addEventListener("DOMContentLoaded", () => {
	let my_menu = document.querySelector(".my_menu")

	let fund = document.createElement("h2")
	fund.innerText = init_fund
	fund.className = "fund"
	my_menu.append(fund)



	fetch("http://localhost:3000/api/v1/categories")
	.then(res => res.json())
	.then(categories => {
		let barmenu = document.querySelector(".navbar")

		barmenu.innerHTML = ""
		
		categories.forEach(c => {
			let ahref = document.createElement("button")
			ahref.innerText = c.name
			barmenu.append(ahref)
			ahref.addEventListener("click", () =>{
				fill_contractors_list(c.contractors)
			})
		})

		fill_contractors_list(categories[0].contractors)
		console.log(categories)
	})


	// const formCreate = document.querySelector(".initialize-appt")


	
}) //DOM


function fill_contractors_list(contractors) {
	let main = document.querySelector(".main")
	let my_menu = document.querySelector(".my_menu")

	main.setAttribute("category", contractors[0].category_id)
	main.innerHTML = ""
	//my_menu.innerHTML = ""

	contractors.forEach(c => {
		let div_polar = render_mini_card(c)
		if (chosen.includes(c.id)){
			
		 } else {
			main.append(div_polar)
		 }

		div_polar.addEventListener("click", () =>{
			if (div_polar.style.opacity < 1) 
				return

			console.log(c)
			console.log(chosen.includes(c.id))

			if (chosen.includes(c.id)){
				chosen = chosen.filter(id => id != c.id)
				my_menu.querySelector(".fund").innerText  = parseInt(my_menu.querySelector(".fund").innerText) + c.price

				if (main.getAttribute("category") == c.category_id)
				{
					main.append(div_polar)
				}else{
					my_menu.removeChild(div_polar)
				}

				able_disable(main, parseInt(my_menu.querySelector(".fund").innerText))

				console.log(my_menu)
			 } else {
				my_menu.append(div_polar)
				chosen.push(c.id)
				my_menu.querySelector(".fund").innerText = parseInt(my_menu.querySelector(".fund").innerText) - c.price
				able_disable(main, parseInt(my_menu.querySelector(".fund").innerText))

			 }
			
			console.log(chosen)
		})
		able_disable(main, parseInt(my_menu.querySelector(".fund").innerText))
	})
	
}

function able_disable(list, fund) {
	list.childNodes.forEach(c => {
		//console.log(c.getAttribute("contractor_price"))
		if (c.getAttribute("contractor_price") <= fund) {
			c.style.opacity = 1
		}else
			c.style.opacity = 0.3

	})
}

function render_mini_card(c) {

	let h4 = document.createElement("h4")
	h4.innerText = "Price " + c.price + "$"

	let h4_name = document.createElement("h4")
	h4_name.innerText = c.name

	
	let div_polar = document.createElement("div")
	div_polar.className = "gallery"

	let img = document.createElement("img")
	img.src = c.img

	let div_cont = document.createElement("div")
	div_cont.className = "desc"

	div_cont.append(h4_name, h4)
	div_polar.append(img, div_cont)

	div_polar.setAttribute("contractor_id", c.id)
	div_polar.setAttribute("contractor_price", c.price)

	return div_polar
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

// function renderContractor(){
//     const div = document.createElement("div")

//     const h2 = document.createElement("h2")
//     h2.innerText 

//     const p = document.createElement("p")
//     p.innerText = contractors.appointments.date 

//     div.append(bttn)
//     divCreate.append(div)
// }


// function newAppointment(name){
//     fetch(contractorURL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "app[lication/json"
//         },
//         body: JSON.stringify({
//             name: client.id,
//             date: date,
//             time: time
//         })
//     })
//     .then(res => res.json())
//     .then(task => renderTask(task))
// }




