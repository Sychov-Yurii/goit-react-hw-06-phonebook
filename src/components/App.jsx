import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Your existing components */}
        {/* Connect components to Redux store using useSelector and useDispatch */}
        {/* For example: */}
        {/* Replace your state with useSelector and dispatch actions with useDispatch */}
        {/* Use useDispatch hook to dispatch actions */}
        {/* Use useSelector to get state from Redux store */}
        <ContactForm />
        <ContactList />
        <Filter />
      </PersistGate>
    </Provider>
  );
};

export default App;
