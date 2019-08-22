fetch("http://localhost:3000/api/v1/contractors")
		.then(res => res.json())
		.then(contractors => {
			let main = document.querySelector(".main")

			main.innerHTML = ""
			
			
			let div_polar = render_mini_card(contractors[0], "red-question-mark.png", price_tag = false)//"qmark.jpg"
		
		main.append(div_polar)
		 
		 div_polar.className += " flip-card flip-card-inner"
			
			console.log(contractors)
			//fill_contractors_line(contractors)


		})