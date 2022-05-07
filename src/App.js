import contactsJSON from './contacts.json';
import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';

const App = () => {
    const fiveContacts = contactsJSON.slice(0, 5);
    const [contacts, setContacts] = useState(fiveContacts);

    return (
        <div className='App'>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                    </tr>
                </thead>
                {contacts.map((contact) => (
                    <Contacts eachContact={contact} />
                ))}
            </table>
        </div>
    );
};

export default App;
