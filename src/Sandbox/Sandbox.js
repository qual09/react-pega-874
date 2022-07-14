import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab, Container, Menu, Icon } from "semantic-ui-react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardFooter,
  Image,
  MenuButton,
  Text
} from '@pega/cosmos-react-core';

class Sandbox extends Component {
  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="sandbox-container">

        <Card style={{ width: "25rem" }}>
          <CardMedia>
            <Image
              src='https://www.pega.com/sites/default/files/default-og.jpg'
              height='100'
              alt='Media'
            />
          </CardMedia>
          <CardHeader
            actions={
              <MenuButton
                portal
                variant='simple'
                text='Card actions'
                icon='more'
                iconOnly
                menu={{
                  items: [
                    { id: 'action-1', primary: 'Card action 1' },
                    { id: 'action-2', primary: 'Card action 2' },
                    { id: 'action-3', primary: 'Card action 3' }
                  ]
                }}
              />
            }
          >
            <Text variant='h2'>Full Card</Text>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </CardContent>
          <CardFooter justify='start'>
            <Text variant='secondary'>This is the CardFooter</Text>
          </CardFooter>
        </Card>

        yo dawg
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    prop1,
    prop2
  } = state;
  return {
    property1: state.prop1,
    property2: state.prop2
  };
}

const connectedSandbox = connect(mapStateToProps)(Sandbox);
export { connectedSandbox as Sandbox };
