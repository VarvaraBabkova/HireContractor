fetch("http://localhost:3000/api/v1/contractors")
.then(res => res.json())
.then(contractors => {
	
	let sidenav = document.querySelector(".sidenav")
	sidenav.innerHTML = ""
	contractors.forEach(c => {
		let ahref = document.createElement("a")
		ahref.innerText = c.name
		sidenav.append(ahref)
	})
	console.log(contractors)
})