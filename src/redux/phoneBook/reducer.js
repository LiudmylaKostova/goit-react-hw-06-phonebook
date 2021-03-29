import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filterContacts } from './actions';

const onAddContact = (state, { payload }) => [...state, payload];
const onRemoveContact = (state, { payload }) =>
  state.filter(item => item.id !== payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });

// ==============c combineReducers без toolkit================

// const items = (state = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case REMOVE_CONTACT:
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = '', action) => {
//   switch (action.type) {
//     case FILTER_CONTACTS:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// export default combineReducers({ items, filter });

// ==============Было до загрузки toolkit==============

// import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACTS } from './types';
// import { combineReducers } from 'redux';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };
// const phonebookReducer = (state = { ...initialState }, action) => {
//   console.log(state);
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: {
//           // filter: '',
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     case REMOVE_CONTACT:
//       // console.log('remove_contact');
//       return {
//         ...state,

//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             item => item.id !== action.payload,
//           ),
//         },
//       };
//     case FILTER_CONTACTS:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filter: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default phonebookReducer;
