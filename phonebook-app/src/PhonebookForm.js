
import { useState } from 'react';

function PhonebookForm({ onSubmit, numEntries }) {
    const genders = {
        male: 'male',
        female: 'female'
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState(genders.male);

    const handleSubmit = (e) => {
        e.preventDefault();

        const phonebookEntry = { id: numEntries, name, email, phone, gender };

        onSubmit(phonebookEntry);

        setName('');
        setEmail('');
        setPhone('');
        setGender(genders.male);
    }

    return (
        <div>
            <form
                className='phonebook-form'
                onSubmit={handleSubmit}
            >
                <label>Name</label>
                <input
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type='text'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone</label>
                <input
                    type='text'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label>Gender</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value={genders.male}>{genders.male.charAt(0).toUpperCase()}</option>
                    <option value={genders.female}>{genders.female.charAt(0).toUpperCase()}</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PhonebookForm;
