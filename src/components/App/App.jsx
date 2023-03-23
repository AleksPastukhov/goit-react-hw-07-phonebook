import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../GlobalStyle';
import PhonebookSection from '../PhonebookSection';
import { Wrapper } from './App.styled';

// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from '../../services/contactApi';

// fetchContacts().then(console.log).catch(console.log);
// addContact().then(console.log).catch(console.log);
// deleteContact(15).then(console.log).catch(console.log);

export default function App() {
  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PhonebookSection mainTitle="Phonebook" title="Contacts" />
      <GlobalStyle />
    </Wrapper>
  );
}
//
