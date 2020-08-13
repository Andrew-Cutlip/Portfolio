import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

function SkillsCard(props) {
    const items = props.items;
    const itemsList = items.map((item) =>
        <ListGroup.Item as="li" key={item}>
            {item}
        </ListGroup.Item>
    );
    return (
      <Card>
          <Card.Header className="cardHeader" >
          <h2>{props.title}</h2>
          </Card.Header>
          <Card.Body>
          {itemsList}
          </Card.Body>
        </Card>
    )
}

export default SkillsCard;