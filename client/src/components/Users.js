import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { observer, inject } from 'mobx-react'
import UsersListStore from '../stores/UsersList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './Users.css'

@observer
export default class Users extends React.Component {
  store = new UsersListStore()
  componentDidMount() {
    console.log('Component mounted, props are:', JSON.stringify(this.props))
    this.fetchUsers()
  }

  fetchUsers() {
    return this.store.fetchUsers()
  }

  render() {
    const users = this.store.users
    console.log('loaded styles', styles)
    console.log('Rendering users', users)
    return (
      <Container className="p-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={styles.actions}>
                        <FontAwesomeIcon icon={faEdit} />
                      </span>
                      <span className={styles.actions}>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}