export default function Contact({contact, onEdit}) {
  return (
    <li className="card bg-base-100 max-w-2xs shadow-sm">
        <div className="card-body">
            <h2 className="card-title">{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => {onEdit(contact)}}>Edit</button>
            </div>                
        </div>
    </li>        
  );
}