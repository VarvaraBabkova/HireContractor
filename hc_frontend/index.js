contractorURL = "http://localhost:3000/api/v1/contractors"
clientURL ="http://localhost:3000/api/v1/clients"
apptURL = "http://localhost:3000/api/v1/appointments"
const init_fund = 100

const main = document.querySelector(".main")
let chosen = []
let my_menu = document.querySelector(".my_menu")

document.addEventListener("DOMContentLoaded", () => {
	let my_menu = document.querySelector(".my_menu")

	let modal = document.getElementById("myModal");
	modal.style.display = "block";

	let span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
	  modal.style.display = "none";
	}

	let st_button = document.getElementById("standard_button")
	let nst_button = document.getElementById("non_standard_button")

	st_button.addEventListener("click", () => {
		let fund = document.createElement("h2")
		fund.innerText = document.getElementById("init_fund").value
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
		})
		modal.style.display = "none";
	})

	nst_button.addEventListener("click", () => {
		let line_length = document.getElementById("line").value

		fetch("http://localhost:3000/api/v1/contractors")
				.then(res => res.json())
				.then(contractors => {
					let barmenu = document.querySelector(".navbar")

					barmenu.innerHTML = ""
					
					while (contractors.length > line_length) {
					    contractors.splice(contractors.length * Math.random() | 0, 1)[0];
					}
					console.log(contractors)
					fill_contractors_line(contractors)
				})
				modal.style.display = "none";
	})
	
}) //DOM

function fill_contractors_line(contractors) {
	let main = document.querySelector(".main")
	let my_menu = document.querySelector(".my_menu")

	main.innerHTML = ""

	contractors.forEach(c => {
		let div_polar = render_mini_card(c, "red-question-mark.png")//"qmark.jpg"
		
		main.append(div_polar)
		 

		div_polar.addEventListener("click", () =>{
			// if (div_polar.style.opacity < 1) 
			// 	return

			// console.log(c)
			// console.log(chosen.includes(c.id))

			// if (chosen.includes(c.id)){
			// 	chosen = chosen.filter(id => id != c.id)
			// 	my_menu.querySelector(".fund").innerText  = parseInt(my_menu.querySelector(".fund").innerText) + c.price

			// 	if (main.getAttribute("category") == c.category_id)
			// 	{
			// 		main.append(div_polar)
			// 	}else{
			// 		my_menu.removeChild(div_polar)
			// 	}

			// 	able_disable(main, parseInt(my_menu.querySelector(".fund").innerText))

			// 	console.log(my_menu)
			//  } else {
			// 	my_menu.append(div_polar)
			// 	chosen.push(c.id)
			// 	my_menu.querySelector(".fund").innerText = parseInt(my_menu.querySelector(".fund").innerText) - c.price
			// 	able_disable(main, parseInt(my_menu.querySelector(".fund").innerText))

			//  }
			
		})
		able_disable(main, 0)
	})

	let flag = true
	let yes_btn = document.createElement("button")
	yes_btn.innerText = "Accept offer!"
	yes_btn.className = "button green"
	let no_btn = document.createElement("button")
	no_btn.innerText = "Decline offer!"
	no_btn.className = "button red"
	let quote_text = document.createElement("h2")

	my_menu.append(yes_btn)
	my_menu.append(no_btn)
	my_menu.append(quote_text)


	yes_btn.addEventListener("click", () => {
		flag = false
	})

	no_btn.addEventListener("click", () => {
		if (contractors.length > 0) {
			quote_text.innerText = contractors.splice(contractors.length * Math.random() | 0, 1)[0].price

		}
	})
	
	//while ((contractors.length > line_length) && (flag)) {
		//contractors.splice(contractors.length * Math.random() | 0, 1)[0];
	quote_text.innerText = contractors.splice(contractors.length * Math.random() | 0, 1)[0].price

	//}

	
}


function fill_contractors_list(contractors) {
	let main = document.querySelector(".main")
	let my_menu = document.querySelector(".my_menu")

	main.setAttribute("category", contractors[0].category_id)
	main.innerHTML = ""
	//main.append(fun_background())

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

function render_mini_card(c, extra = null) {

	let h4 = document.createElement("h4")
	h4.innerText = "Price " + c.price + "$"

	let h4_name = document.createElement("h4")
	h4_name.innerText = c.name

	
	let div_polar = document.createElement("div")
	div_polar.className = "gallery"

	let img = document.createElement("img")
	img.src = c.img


	
	let ex_img = document.createElement("img")

	if (extra) {
		ex_img.src = extra
		ex_img.style.position = "absolute"
		 ex_img.style.top = "0"
		ex_img.style.left = "0"

		 ex_img.style.zIndex = "10"
		 ex_img.style.backgroundColor = "transparent"
		 ex_img.style.height = "150px"
	}
	

	let div_cont = document.createElement("div")
	div_cont.className = "desc"

	//div_cont.append(h4_name, h4)
	div_polar.append(img, ex_img)

	div_polar.setAttribute("contractor_id", c.id)
	div_polar.setAttribute("contractor_price", c.price)

	return div_polar
}

function fun_background() {
	const div1 = document.createElement("div")
	div1.className = "circle"
	return div1
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




