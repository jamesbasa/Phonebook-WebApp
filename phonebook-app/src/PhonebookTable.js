
// import { useEffect } from 'react';

function PhonebookTable({ phonebookData }) {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const dataJson = await response.json();
    //         setPhonebookData(dataJson);
    //     };

    //     fetchData()
    //         .catch(console.error);
    // }, []);

    return (
        <div>
            {phonebookData &&
                <table className="phonebook-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phonebookData.sort((a,b) => a.name.localeCompare(b.name)).map((entry) => {
                            return <tr key={entry.id}>
                                        <td>{entry.name}</td>
                                        <td>{entry.email}</td>
                                        <td>{entry.phone}</td>
                                        <td>{entry.gender}</td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default PhonebookTable;
