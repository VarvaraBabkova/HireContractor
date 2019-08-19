fetch("http://localhost:3000/api/v1/contractors")
.then(res => res.json())
.then(r => console.log(r))