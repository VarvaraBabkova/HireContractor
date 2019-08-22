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
		tag_img.style.top = "90px"
		tag_img.style.right = "0"

		 tag_img.style.zIndex = "10"
		 tag_img.style.backgroundColor = "transparent"
		 tag_img.style.height = "55px"
		 tag_img.style.width = "55px"

		  h4.innerText = "$" +  c.price
		h4.style.position = "absolute"
		h4.style.top = "90px"
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

function change_to_tag(div_polar, price) {
	console.log(div_polar, price)

	div_polar.removeChild(div_polar.children[1])

	let tag_img = document.createElement("img")
	let h4 = document.createElement("h4")

	tag_img.src = price_tag_image
	tag_img.style.position = "absolute"
	tag_img.style.top = "90px"
	tag_img.style.right = "0"

	 tag_img.style.zIndex = "10"
	 tag_img.style.backgroundColor = "transparent"
	 tag_img.style.height = "55px"
	 tag_img.style.width = "55px"

	  h4.innerText = "$" + price 
	h4.style.position = "absolute"
	h4.style.top = "90px"
	h4.style.right = "0"
	h4.style.zIndex = "20"
	 h4.style.backgroundColor = "transparent"
	 h4.style.height = "50px"
	 h4.style.width = "40px"
	

	div_polar.append(tag_img, h4)
	console.log(div_polar)
}
