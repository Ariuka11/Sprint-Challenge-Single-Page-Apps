import React from "react";
import { Card } from 'semantic-ui-react';

export default function EpisodeCard({name, episode, date}){
    return (
        <Card>
           <Card.Content>
                <Card.Header>
                {name}
                </Card.Header> 
                <Card.Description>
                 Episode : {episode}
                <br/> 
                 Air Date : {date}
                </Card.Description>
            </Card.Content>  
        </Card>
    )
}
