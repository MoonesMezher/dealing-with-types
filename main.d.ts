declare class Contact {
    name: string;
    email: string;
    phone: string;
    constructor(name: string, email: string, phone: string);
}
declare class AddressBook {
    contacts: Contact[];
    addContact(contact: Contact): void;
    findContactByName(name: string): Contact | undefined;
    filterByGroup(group: string): Contact[];
    sortByName(): void;
    searchContacts(searchTerm: string): Contact[];
    printContacts(): void;
}
declare const addressBook: AddressBook;
declare const contact1: Contact;
declare const contact2: Contact;
declare const contact3: Contact;
declare const searchResults: Contact[];
