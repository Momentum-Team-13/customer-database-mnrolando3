console.log(customers)
const customerList = document.querySelector('#customers')

for (let customer of customers) {
    let personElement = document.createElement('div')
    personElement.classList.add('person')

    let imageElement = document.createElement('img')
    imageElement.src = customer.picture.large
    imageElement.alt = 'image of customer'
    imageElement.classList.add('picture')
    personElement.appendChild(imageElement)

    let nameElement = document.createElement('h2')
    nameElement.classList.add('name')
    nameElement.innerText = `${customer.name.first.charAt(0).toUpperCase()}${customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase()}${customer.name.last.slice(1)}`
    personElement.appendChild(nameElement)

    let emailElement = document.createElement('div')
    emailElement.classList.add('email')
    emailElement.innerText = customer.email
    personElement.appendChild(emailElement)

    let streetElement = document.createElement('div')
    streetElement.classList.add('location')
    streetElement.innerText = `${customer.location.street.number} ${customer.location.street.name}`
    personElement.appendChild(streetElement)

    let locationElement = document.createElement('span')
    locationElement.classList.add('location')
    locationElement.innerText = `${customer.location.city}, ${customer.location.postcode}`
    personElement.appendChild(locationElement)

    // for (let state of usStates) {
    //     let stateElement = document.createElement('span')
    //     stateElement.classList.add('location')
    //     if (customer.state === state.name) {
    //    return stateElement.innerText = state.abbreviation
    // };
    //     personElement.appendChild(stateElement)
    // }

    // let zipElement = document.createElement('span')
    // zipElement.classList.add('location')
    // zipElement.innerText = ` ${customer.location.postcode}`
    // personElement.appendChild(zipElement)

    let dobElement = document.createElement('div')
    dobElement.classList.add('dates')
    // moment. format("MM/DD/YY")
    dobElement.innerText = `DOB: ${customer.dob.date}`
    personElement.appendChild(dobElement)

    let regElement = document.createElement('div')
    regElement.classList.add('dates')
    regElement.innerText = `Customer Since ${customer.registered.date}`
    personElement.appendChild(regElement)

    customerList.appendChild(personElement)
}