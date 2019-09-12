const storage = window.localStorage

const renderContacts = () => {
    
    const contacts = JSON.parse(storage.getItem('contacts'))
  
    let div = document.querySelector('.contact-list')
  
    if (contacts) {
      div.innerHTML = ''
  
      const ul = document.createElement('ul')
  
      contacts.forEach(contact => {
        let li = document.createElement('li')
        li.innerHTML = `
        <div class="ui centered card">
        <div class="image">
          <img src="https://semantic-ui.com/images/avatar/large/daniel.jpg" class="visible content">
        </div>
        <div class="content">
            <div class="header">${ contact.name }</div>
            <div class="meta">${ contact.company }</div>
            <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
            <div class="notes">${ contact.email }</div>
            <div class="description">
            ${ contact.notes }
            </div>
          </div>
        </div>      
       `
        ul.appendChild(li)
      })
  
      div.appendChild(ul) 
    } else { 
      div.innerHTML = '<p>You have no contacts in your address book</p>' 
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    
    const addContactForm = document.querySelector('.new-contact-form')
  
     addContactForm.addEventListener('submit', event => {
      event.preventDefault()
    
  
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }
  
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
      addContactForm.reset()
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      contacts.push(contact)
       storage.setItem('contacts',JSON.stringify(contacts))
       
       
       renderContacts()
    })
  })