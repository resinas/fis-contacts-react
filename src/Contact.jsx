export default function Contact({contact}) {
  return (
    <div className="card bg-base-100 max-w-2xs shadow-sm">
        <div className="card-body">
            <h2 className="card-title">{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
        </div>
    </div>        
  );
}