
import { useEffect, useState } from 'react';

function PhonebookTable() {
    const [phonebookData, setPhonebookData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const dataJson = await response.json();
            setPhonebookData(dataJson);
        };

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <div>
            {phonebookData &&
                <table className="phonebook-table">
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                    {phonebookData.map((entry) => {
                        return <tr key={entry.id}>
                                    <td>{entry.name}</td>
                                    <td>{entry.email}</td>
                                    <td>{entry.phone}</td>
                                </tr>
                    })}
                </table>
            }
        </div>
    );
}

export default PhonebookTable;
