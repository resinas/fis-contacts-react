import { useState } from "react";

export default function EditableContact({ contact, onSave, onClose }) {
    const [phone, setPhone] = useState(contact.phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        var updatedContact = {
            ...contact,
            phone: phone.trim()
        };
        onSave(updatedContact);
    }

    return (
        <li className="card bg-base-100 max-w-2xs shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{contact.name}</h2>
                <form method="dialog" onSubmit={handleSubmit}>
                    <label className="input mb-3">
                        <span className="label">Phone: </span>
                        <input
                            type="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="555-1234"
                        />
                    </label>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn" onClick={onClose}>Cancel</button>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </li>
    );
}