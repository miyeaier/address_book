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
        <div class="ui cards">
        <div class="card">
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

/*
<div class="ui cards">
  <div class="card">
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
  <div class="card">
    <div class="content">
      <div class="header">Veronika Ossi</div>
      <div class="meta">Friend</div>
      <div class="description">
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <div class="header">Jenny Hess</div>
      <div class="meta">Friend</div>
      <div class="description">
        Jenny is a student studying Media Management at the New School
      </div>
    </div>
  </div>
</div>
*/


/*
  <div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/matthew.png">
    </div>
    <div class="content">
      <div class="header">`${ contact.name }`</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/molly.png">
    </div>
    <div class="content">
      <div class="header">Molly</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
        Molly is a personal assistant living in Paris.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/elyse.png">
    </div>
    <div class="content">
      <div class="header">Elyse</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
</div>
*/