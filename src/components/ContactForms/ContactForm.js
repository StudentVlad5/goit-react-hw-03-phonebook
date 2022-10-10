import React,{Component} from "react";
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';

let INISHIAL_STATE = {
    name:'',
    phone:'',
}

class ContactForm  extends Component  {
    state = INISHIAL_STATE;


handleChangeForm = (event) =>{
    const {name, value} = event.target;
    this.setState({[name]:value});
}

handleFormSubmit = (event) => {
    event.preventDefault()
    const id = nanoid();
    const {name, phone} = this.state;
    const {onAdd} = this.props;
    const isValidateForm = this.validateForm();
    if(!isValidateForm)return 
    onAdd({id:id,name, phone})
}

validateForm = () => {
    const {name, phone} = this.state;
     const { onCheckUnique } = this.props;
    if (!name || !phone){
        alert('Some field is empty')
        return false}

    return onCheckUnique(name)
    }

resetForm = () => this.setState(INISHIAL_STATE)

    render() {
        const {name, phone} = this.state;
        return(
        <form onSubmit={this.handleFormSubmit}>
            <label>Name
                <input  
                type="text"   
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange = {this.handleChangeForm}
                required/>
            </label>
            <label>Phone
                <input 
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={phone}
                onChange = {this.handleChangeForm}
                required/>
            </label>
            <button type='submit'>Add contact</button>
        </form>)
        
    }

}  

export default ContactForm

ContactForm.propTypes = {
    state: propTypes.arrayOf(
        propTypes.string
    )
}