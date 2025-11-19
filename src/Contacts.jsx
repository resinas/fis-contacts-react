import Contact from './Contact'

export default function Contacts({contacts}) {
    return (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto list-none">
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}