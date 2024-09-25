import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <Button variant="secondary" as={NavLink} to={`/edit/${user.id}`}>
          Edit user
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
