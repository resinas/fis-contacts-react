import { api } from ".";

export function getContacts() {
    return api.get("/contacts");
}

export function addContact(contact) {
    return api.post("/contacts", contact);
}

export function updateContact(id, contact) {
    return api.put(`/contacts/${id}`, contact);
}

export function deleteContact(id) {
    return api.delete(`/contacts/${id}`);
}