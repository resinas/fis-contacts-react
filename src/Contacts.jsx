import Contact from './Contact'
import Alert from './Alert';
import { useState } from 'react';

export default function Contacts({contacts}) {
    const [message, setMessage] = useState(null);

    return (
        <>
            <Alert message={message} onClose={() => setMessage(null)} />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto list-none">
                {contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} onEdit={(c) => setMessage(c.name)} />
                ))}
            </ul>
        </>
    );
}