import React from 'react';
import { Container, Image, Menu, Grid, List } from 'semantic-ui-react';

class BottomMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="three">
            <Grid.Column>
              <Image src="http://luckybelly.com/img/lucky-logo-light.png"/>
            </Grid.Column>
            <Grid.Column>
              Links
              <hr/>
              <List>
                <List.Item>Hours</List.Item>
                <List.Item>Menus</List.Item>
                <List.Item>Reservations</List.Item>
                <List.Item>Corkage</List.Item>
                <List.Item>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Contact
              <hr/>
              <List>
                <List.Item>808-531-1888</List.Item>
                <List.Item>eat@luckybelly.com</List.Item>
                <List.Item>50 N. Hotel St. Honolulu, HI 96817</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}
