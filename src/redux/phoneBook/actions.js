import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact');
export const removeContact = createAction('phonebook/removeContact');
export const filterContacts = createAction('phonebook/filterContacts');

// ==============Было до загрузки toolkit==============

// import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACTS } from './types';

// export const addContact = item => {
//   return {
//     type: ADD_CONTACT,
//     payload: item,
//   };
// };

// export const removeContact = id => {
//   return {
//     type: REMOVE_CONTACT,
//     payload: id,
//   };
// };
// export const filterContacts = value => {
//   return {
//     type: FILTER_CONTACTS,
//     payload: value,
//   };
// };
