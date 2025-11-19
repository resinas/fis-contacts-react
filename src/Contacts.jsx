import Contact from './Contact'
import Alert from './Alert';
import { useState } from 'react';
import NewContactModal from './NewContactModal';

export default function Contacts({contacts}) {    
    const [message, setMessage] = useState(null);
    const [contactsList, setContactsList] = useState(contacts);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleAddContact(newContact) {
        if (newContact.name === '') {
            setMessage('A name must be provided');
            return false;
        }

        if (contactsList.find(c => c.name === newContact.name)) {
            setMessage('Duplicated contact');
            return false;
        }

        setContactsList((prev) => [...prev, newContact]);
        setIsModalOpen(false);

        return true;
    }

    return (
        <>
            <Alert message={message} onClose={() => setMessage(null)} />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto my-6 list-none">
                {contactsList.map((contact) => (
                    <Contact key={contact.id} contact={contact} onEdit={(c) => setMessage(c.name)} />
                ))}
            </ul>
            <NewContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleAddContact} />
            <div className="fab">
                <button className="btn btn-lg btn-circle btn-primary" onClick={() => setIsModalOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>                        
                </button>
            </div>                
        </>
    );
}