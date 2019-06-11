import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    website: '',
    errors: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const contact = res.data
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      website: contact.website
    })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone, website } = this.state

    //check for empty fields
    if (name === '') {
      this.setState({ errors: { name: 'name required' } })
      return
    }

    if (email === '') {
      this.setState({ errors: { email: 'email required' } })
      return
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'phone required' } })
      return
    }

    if (website === '') {
      this.setState({ errors: { website: 'website required' } })
      return
    }
    const updateContact = {
      name,
      email,
      phone,
      website
    }

    const { id } = this.props.match.params

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)

    dispatch({ type: "UPDATE_CONTACT", payload: res.data })

    //clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      website: '',
      errors: {}
    })

    this.props.history.push('/')
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, phone, website, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Website"
                    name="website"
                    placeholder="Enter Website"
                    value={website}
                    onChange={this.onChange}
                    error={errors.website}
                  />
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact
