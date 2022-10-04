function LocalStorage  (initialContacts) {return (
    localStorage.setItem("initialContacts", JSON.stringify(initialContacts)));
}
export default LocalStorage