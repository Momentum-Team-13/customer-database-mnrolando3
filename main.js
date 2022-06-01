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
    emailElement.innerText = `${customer.email}`
    personElement.appendChild(emailElement)

    let locationElement = document.createElement('div')
    locationElement.classList.add('location')
    locationElement.innerText = `${customer.location}`
    personElement.appendChild(locationElement)

    let dobElement = document.createElement('div')
    dobElement.classList.add('dates')
    dobElement.innerText = `DOB: ${customer.dob.date}`
    personElement.appendChild(dobElement)

    let regElement = document.createElement('div')
    regElement.classList.add('dates')
    regElement.innerText = `Customer Registered: ${customer.registered.date}`
    personElement.appendChild(regElement)

    customerList.appendChild(personElement)
    //appends report, including content and image, to weatherList, which is an existing element on the page because it's outside the for loop
}