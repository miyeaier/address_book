const storage = window.localStorage

const renderContacts = () => {
    
    const contacts = JSON.parse(storage.getItem('contacts'))
  
    let div = document.querySelector('#contact-list')
  
    if (contacts) {
      div.innerHTML = ''
  
      const ul = document.createElement('div')
  
      contacts.forEach(contact => {
        let li = document.createElement('div')
        li.innerHTML = `
        <div class="ui card" id="profile-div">
          <div class="image">
            <img src="https://semantic-ui.com/images/avatar/large/daniel.jpg" class="visible content">
          </div>
          <div class="content">
              <div> <i class="users icon"></i>${ contact.name }</div>

              <div> <i class="suitcase icon"></i>${ contact.company }</div>
              <div>
              <i class="phone square icon"></i>${ contact.phone }
            </div>
            <div>
            <i class="twitter square icon"></i>
              <a href="https://www.twitter.com/">${contact.twitter}</a>
              </div>
              
              <div>
              <i class="envelope open icon"></i>${ contact.email }</div>
              
              <div class="description"> ${ contact.notes }</div>
            </div>
            <button onClick="var c = JSON.parse(localStorage.getItem('contacts')); c.forEach((item, index, array) => item.id === ${contact.id} && array.splice(index, 1) ); localStorage.setItem('contacts', JSON.stringify(c)); window.location.reload()" class="delete-this-contact" class="ui black basic button">Delete this contact</button>
          
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
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      contacts.push(contact)
      storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts()
      addContactForm.reset()
    })
  })


  /*
   var storedNames = JSON.parse(localStorage.getItem("contacts"));
       var indexToRemove = 1;
       storedNames.slice(indexToRemove, 1);
       localStorage.setItem('contacts', JSON.stringify(storedNames));
       
  */