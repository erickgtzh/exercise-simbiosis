import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/api/user';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [], isLoading: true };
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleDelete(id) {
    await axios.get(baseUrl + `/delete/${id}`).then(() => {
      let updatedUsers = [...this.state.users].filter(
        (i) => i.id !== id,
      );
      this.setState({ users: updatedUsers });
    });
    this.getUsers();
  }

  getUsers() {
    this.setState({ isLoading: true });

    fetch(baseUrl + '/list')
      .then((response) => response.json())
      .then((data) =>
        this.setState({ users: data, isLoading: false }),
      );
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const userList = users.map((user) => {
      return (
        <tr key={user.id}>
          <td style={{ whiteSpace: 'nowrap' }}>
            {user.first_name}
          </td>
          <td>{user.last_name}</td>
          <td>{user.birthday}</td>
          {checkGender(user.gender_id)}
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={'/user/edit/' + user.user_id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.handleDelete(user.user_id)}>
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    function checkGender(gender) {
      return gender === 1 ? <td>Male</td> : <td>Female</td>;
    }

    return (
      <div>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="10%">Birthday</th>
              <th width="10%">Gender</th>
              <th width="10%">Actions</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </Table>
      </div>
    );
  }
}

export default List;
