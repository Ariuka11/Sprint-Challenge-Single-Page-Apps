import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    return(
        <Menu tabular>
            <NavLink exact to = '/' className = 'item'>  <Icon name='home' />Home Page</NavLink>
            <NavLink to = '/characters' className = 'item'>  <Icon name='users' />Characters</NavLink>
            <NavLink to = '/locations' className = 'item'>  <Icon name='map outline' />Location</NavLink>
            <NavLink to = '/episodes' className = 'item'>  <Icon name='video' />Episodes</NavLink>
        </Menu>
    )
};
