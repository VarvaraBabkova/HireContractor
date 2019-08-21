contractorURL = "http://localhost:3000/api/v1/contractors"
clientURL ="http://localhost:3000/api/v1/clients"
apptURL = "http://localhost:3000/api/v1/appointments"

price_tag_image = "price-tag.png"

const init_fund = 100

const main = document.querySelector(".main")
let chosen = []
let my_menu = document.querySelector(".my_menu")

let best_offer = null
let best_price = null

const dis_opacity = 0.5

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
		let money_image = document.createElement("img")
		let fund = document.createElement("h1")
		//fund.innerText = "$" + document.getElementById("init_fund").value + " left!"
		fund.innerText = document.getElementById("init_fund").value
		fund.className = "fund"
		fund.style.position = "absolute"
		fund.style.width = "50px"
		//fund.style.right = "-50px"
		fund.style.left = (window.innerWidth - 100) + "px"
		fund.style.bottom = "0"
		fund.style.zIndex = "10"

		money_image.src = "74q02z_large.png"
		money_image.style.position = "absolute"
		money_image.style.width = "150px"
		money_image.style.height = "70px"
		 money_image.style.backgroundColor = "transparent"

		money_image.style.left = (window.innerWidth - 150) + "px"
		//debugger
		money_image.style.bottom = "0"
		money_image.style.zIndex = "9"

		my_menu.append(money_image)
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

					best_price = contractors.reduce((min, p) => p.price < min ? p.price : min, contractors[0].price);
					best_offer = contractors.find(c => c.price == best_price)
					
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
	chosen = []

	contractors.forEach(c => {
		let div_polar = render_mini_card(c, "red-question-mark.png", price_tag = false)//"qmark.jpg"
		
		main.append(div_polar)
		 
		div_polar.addEventListener("click", () =>{
			if (div_polar.style.opacity < 1) 
				return
			
			disable_all(main)
			chosen.push(c.id)

			draw_mymenu_choice(my_menu, c, div_polar)			
		})
		able_disable_kicked(main, chosen)
	})
	main.scrollTop = 0
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

				able_disable_price(main, parseInt(my_menu.querySelector(".fund").innerText))

				console.log(my_menu)
			 } else {
				my_menu.append(div_polar)
				chosen.push(c.id)
				my_menu.querySelector(".fund").innerText = parseInt(my_menu.querySelector(".fund").innerText) - c.price
				able_disable_price(main, parseInt(my_menu.querySelector(".fund").innerText))

			 }
			
			console.log(chosen)
		})
		able_disable_price(main, parseInt(my_menu.querySelector(".fund").innerText))
	})
	main.scrollTop = 0
	
}

function draw_mymenu_choice(my_menu, contractor, div_polar) {
	let yes_btn = document.createElement("button")
	yes_btn.innerText = "Accept offer!"
	yes_btn.className = "button green"
	let no_btn = document.createElement("button")
	no_btn.innerText = "Decline offer!"
	no_btn.className = "button red"
	let quote_text = document.createElement("h2")


	change_to_tag(div_polar, contractor.price)
	div_polar.style.opacity = 1
	my_menu.append(div_polar)
	my_menu.append(yes_btn)
	my_menu.append(no_btn)
	my_menu.append(quote_text)

	quote_text.innerText = contractor.price

	yes_btn.addEventListener("click", () => {
		my_menu.innerHTML = ""
		let h2 = document.createElement("h2")
		h2.innerText = "Excellent choice!"

		let result = document.createElement("h4")
		if (contractor.price == best_price) {
			result.innerText = "That was the best price in the list!"
			my_menu.append(render_mini_card(contractor))
			my_menu.append(h2)
			my_menu.append(result)

		}else{
			result.innerText = "That was not the best price in the list though...."
			my_menu.append(render_mini_card(best_offer))
			my_menu.append(h2)
			my_menu.append(result)

		}

		let bye_button = document.createElement("button")
		bye_button.innerText = "See you next time!"
		my_menu.append(bye_button)
		bye_button.addEventListener("click", () => location.reload())
		
	})

	no_btn.addEventListener("click", () => {
		document.querySelector(".main").append(div_polar)
		able_disable_kicked(document.querySelector(".main"), chosen)
		my_menu.innerHTML = ""

	})

}
function change_to_tag(div_polar, price) {
	console.log(div_polar, price)

	div_polar.removeChild(div_polar.children[1])

	let tag_img = document.createElement("img")
	let h4 = document.createElement("h4")

	tag_img.src = price_tag_image
	tag_img.style.position = "absolute"
	tag_img.style.top = "0"
	tag_img.style.right = "0"

	 tag_img.style.zIndex = "10"
	 tag_img.style.backgroundColor = "transparent"
	 tag_img.style.height = "55px"
	 tag_img.style.width = "55px"

	  h4.innerText = "$" + price 
	h4.style.position = "absolute"
	h4.style.top = "0"
	h4.style.right = "0"
	h4.style.zIndex = "20"
	 h4.style.backgroundColor = "transparent"
	 h4.style.height = "50px"
	 h4.style.width = "40px"
	

	div_polar.append(tag_img, h4)
	console.log(div_polar)
}


function able_disable_price(list, fund) {
	list.childNodes.forEach(c => {
		if (c.getAttribute("contractor_price") <= fund) {
			c.style.opacity = 1
		}else
			c.style.opacity = dis_opacity

	})
}

function able_disable_kicked(list, chosen) {
	list.childNodes.forEach(c => {

		if (!chosen.includes(parseInt(c.getAttribute("contractor_id")))) {
			c.style.opacity = 1

		}else
			c.style.opacity = dis_opacity
	})
}
function disable_all(list) {
	list.childNodes.forEach(c => c.style.opacity = dis_opacity)
}


function render_mini_card(c, extra = null, price_tag = true) {

	let h4_name = document.createElement("h4")
	h4_name.innerText = c.name

	
	let div_polar = document.createElement("div")
	div_polar.className = "gallery"

	let img = document.createElement("img")
	img.src = c.img


	
	let ex_img = document.createElement("img")
	ex_img.id = "extra_image"

	if (extra) {
		ex_img.src = extra
		ex_img.style.position = "absolute"
		 ex_img.style.top = "0"
		ex_img.style.left = "0"

		 ex_img.style.zIndex = "10"
		 ex_img.style.backgroundColor = "transparent"
		 ex_img.style.height = "150px"
	}
	
	let tag_img = document.createElement("img")
	let h4 = document.createElement("h4")


	if (price_tag) {
		tag_img.src = price_tag_image
		tag_img.style.position = "absolute"
		tag_img.style.top = "0"
		tag_img.style.right = "0"

		 tag_img.style.zIndex = "10"
		 tag_img.style.backgroundColor = "transparent"
		 tag_img.style.height = "55px"
		 tag_img.style.width = "55px"

		  h4.innerText = "$" +  c.price
		h4.style.position = "absolute"
		h4.style.top = "0"
		h4.style.right = "0"
		h4.style.zIndex = "20"
		 h4.style.backgroundColor = "transparent"
		 h4.style.height = "50px"
		 h4.style.width = "40px"
	}
	

	div_polar.append(img, ex_img, tag_img, h4)

	div_polar.setAttribute("contractor_id", c.id)
	div_polar.setAttribute("contractor_price", c.price)

	return div_polar
}




