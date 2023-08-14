import { useState } from 'react';
import './App.css';
import PhonebookTable from './PhonebookTable';
import PhonebookForm from './PhonebookForm';

function App() {
  const [phonebookData, setPhonebookData] = useState([]);

  const handleSubmit = (newEntry) => {
    setPhonebookData([...phonebookData, newEntry]);
  }

  return (
    <div className="App">
      <div className="app-header">
        <h2>Phonebook</h2>
      </div>
      <PhonebookForm
        onSubmit={handleSubmit}
        numEntries={phonebookData.length}
      />
      <PhonebookTable
        phonebookData={phonebookData}
      />
    </div>
  );
}

export default App;
