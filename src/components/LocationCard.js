import React from "react";
import { Card, Button } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
         {name}
        </Card.Header> 
        <Card.Description>
          {dimension}
          <br/> 
          {type}
        </Card.Description>
      </Card.Content>
      <div className='ui one buttons'>
       <Button>Residents: {residents}</Button>
      </div>
    </Card>
  )
}
