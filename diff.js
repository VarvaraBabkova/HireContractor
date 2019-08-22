const divForm = document.querySelector(".form-appt")

form.addEventListener("submit",e => {
    e.preventDefault

    updateName = e.target[0].value
    updateEmail = e.target[1].value
    updatePhone = e.target[2].value 

    // fetch(`${contractorURL}/${contractor.id}`,{
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         name = updateName,
    //         email = updateEmail,
    //         phone = updatePhone
    //     })
    // })
    
})
