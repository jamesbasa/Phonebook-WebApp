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
