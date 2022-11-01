import propTypes from 'prop-types';
const ContactListItem = ({id, name, phone, onRemove}) => {
    return (
        <li>
            {name}: {phone} <button onClick={()=>onRemove(id)}>Delete</button>
        </li>
    )
}

const ContactList = ({contacts, onRemove}) =>{
    if(contacts.length === 0){return null}
    return (
        <ul>
            {contacts.map(contact => <ContactListItem {...contact} onRemove={onRemove} key={contact.id}/>)}
        </ul>
    )
}

export default ContactList

ContactListItem.propTypes = {
    id : propTypes.string.isRequired,
    name : propTypes.string.isRequired, 
    phone : propTypes.string.isRequired, 
    onRemove: propTypes.func
}