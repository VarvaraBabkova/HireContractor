contractorURL = "http://localhost:3000/api/v1/contractors"
clientURL 
apptURL = "http://localhost:3000/api/v1/appointments"

fetch(contractorURL)
.then(res => res.json())
.then(r => console.log(r))
const formCreate = document.querySelector(".front-appointment")
function renderContractor(){
    const div = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.innerText 

    const p = document.createElement("p")
    p.innerText = contractors.appointments.date 

    div.append(bttn)
    divCreate.append(div)
}
formCreate.addEventListener("submit", e => {
    e.preventDefault()
})
function newAppointment(name){
    fetch(contractorURL, {
        method: "POST",
        headers: {
            "Content-Type": "app[lication/json"
        },
        body: JSON.stringify({
            name: client.id,
            date: date,
            time: time
        })
    })
    .then(res => res.json())
    .then(task => renderTask(task))
}