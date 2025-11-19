import { useState } from "react";

export default function NewContactModal({ isOpen, onClose, onSave }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        var result = onSave({
            id: Date.now(),
            name: name.trim(),
            phone: phone.trim()
        });

        if (result) {
            clearAndClose();
        }
    };

    function clearAndClose() {
        setName("");
        setPhone("");
        onClose();
    }

    return (
        <dialog className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">New contact</h3>

                <form method="dialog" onSubmit={handleSubmit}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            name="name"
                            className="input w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ada Lovelace"
                            required
                        />
                        <p className="label">Required</p>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Phone</legend>
                        <input
                            type="phone"
                            name="phone"
                            className="input w-full"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="555-1234"
                        />
                    </fieldset>

                    <div className="modal-action">
                        <button className="btn" type="button" onClick={clearAndClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save contact
                        </button>
                    </div>
                </form>
            </div>

            {/* Click outside closes modal */}
            <form method="dialog" className="modal-backdrop">
                <button onClick={clearAndClose}>close</button>
            </form>
        </dialog>
    );
}