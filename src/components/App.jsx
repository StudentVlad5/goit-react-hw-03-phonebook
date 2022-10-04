import React,{ Component } from 'react';
import Filter from './Filter/Filter'
import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';
import initialContacts from './initialContacts.json'

function dynamicSort(property) {
  return function (a,b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result;
  }
}
initialContacts.sort(dynamicSort("name"));

export default class App extends Component {
state = {
      contacts: initialContacts,
      filter:'',
     }

handleAddContact = (newContact) => {this.setState(({contacts})=>({contacts : [...contacts, newContact],})
)}

handleCheckUniqueContact = (name) => {
  const {contacts} = this.state;
  const isExistContact = !!contacts.find(contact => contact.name === name);
  isExistContact && alert('Contact is already exist');
  return !isExistContact
}

handleRemoveContact = (id) => this.setState(({contacts})=>({contacts: contacts.filter(contact=>contact.id !== id)}))

handleFilterChange = (filter) => this.setState({filter})

getVisibleContacts = () => {
const {contacts, filter} = this.state
return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
} 
  render() {
   const {filter} = this.state;
   const visibleContacts = this.getVisibleContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
<ContactForm onAdd={this.handleAddContact} onCheckUnique={this.handleCheckUniqueContact}/>
<h2>Contacts List</h2>
<h5>Find contact</h5><Filter filter={filter} onChange={this.handleFilterChange}/>
<div className="list_section">
<ContactList contacts={visibleContacts} onRemove={this.handleRemoveContact}/>
</div>
  </div>
  );
}}

