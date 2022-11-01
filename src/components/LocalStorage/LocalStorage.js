import propTypes from 'prop-types';
function LocalStorage  (initialContacts) {return (
    localStorage.setItem("initialContacts", JSON.stringify(initialContacts)));
}
export default LocalStorage

LocalStorage.propTypes = {
    initialContacts:  propTypes.arrayOf(
        propTypes.string)
}