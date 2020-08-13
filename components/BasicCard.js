import React from 'react';
import { Card} from 'react-bootstrap';
import MyCard from './MyCard'

function BasicCard(props) {
    let header = null;
    let txt = null;
    let body = null;
    if (props.header) {
        header = <Card.Header className="cardHeader" as={props.header}>
        {props.heading}
   </Card.Header>
   if (props.text) {
    txt = <Card.Text>
        {props.text.map( (text) => {
            return <div>{text}</div>
        })}
    </Card.Text>
   }
   if (props.body) {
       body = props.body
   }
    }
    return (
        <MyCard>
            {header}
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Subtitle>
                    {props.subtitle}
                </Card.Subtitle>
                {txt}
                {body}
            </Card.Body>
        </MyCard>
    )
}

export default BasicCard;