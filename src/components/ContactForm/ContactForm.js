import { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import styles from './ContactForm.module.css';
import MyButton from '../MyButton/MyButton';
import { addContact } from '../../redux/phoneBook/actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // if (e.target.value.length > 0) {
    //   this.setState({ disabled: false });
    //   console.log(e.target.value.length);
    // } else {
    //   this.setState({ disabled: true });
    // }
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (
      this.props.state.contacts.items.some(
        contact => contact.name === this.state.name,
      )
    ) {
      // console.log(this.props);
      alert(`${this.state.name} already exists in contacts`);
      this.setState({ name: '', number: '' });
    } else {
      const contact = {
        name: this.state.name,
        number: this.state.number,
        id: shortid.generate(),
      };
      this.props.onAddContact(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <MyButton
          style={styles.button}
          disable={name === '' || number === '' ? true : false}
          value="Add Contact"
          handleClick={() => {}}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  // console.log({ state });
  return { state };
};

const mapDispatchToProps = {
  onAddContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
