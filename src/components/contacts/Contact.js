import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'
import '../contacts/contact.css'
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  toggleDetails = () => this.setState({
    showContactInfo: !this.state.showContactInfo
  })

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    }
  }

  render() {
    const { id, name, email, phone, website } = this.props.contact
    const { showContactInfo } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h5>{name}{' '}
                <i className="far fa-address-card app-btn"
                  onClick={() => {
                    this.toggleDetails()
                  }}>
                </i>

                <Link to={`contact/edit/${id}`} className="fas fa-edit app-btn">
                </Link>
                <i className="fas fa-skull app-btn"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                </i>
              </h5>
              {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
                <li className="list-group-item">Website: {website}</li>
              </ul>) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact