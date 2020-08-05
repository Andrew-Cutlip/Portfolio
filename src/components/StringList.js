import React from 'react';
import { ListGroup } from 'react-bootstrap';

function StringList(props) {
    const items = props.items;
    const itemsList = items.map((item) =>
        <ListGroup.Item as="li" key={item}>
            {item}
        </ListGroup.Item>
    );
    return (
      <div>
          <h2>{props.title}</h2>
          {itemsList}
      </div>
    )
}

export default StringList;