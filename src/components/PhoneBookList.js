import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { deleteUserData } from "../actions/adding_actions";

const PhoneBookList = ({ users }) => {
  const sortedUserList = users.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteUserData(id));
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {sortedUserList &&
          sortedUserList.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <Button onClick={() => onDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.items.users,
  };
};

export default connect(mapStateToProps)(PhoneBookList);
