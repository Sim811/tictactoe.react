import React from "react";
import Square from "./Square";
import O from "../images/O.png";
import X from "../images/X.png";
import E from "../images/blackblock.png";

import { Container, Image, Header, Styles, Grid } from "semantic-ui-react";




class Game extends React.Component {
  state = {
    divs: [
      { id: 1, clicked: false },
      { id: 2, clicked: false },
      { id: 3, clicked: false },
      { id: 4, clicked: false },
      { id: 5, clicked: false },
      { id: 6, clicked: false },
      { id: 7, clicked: false },
      { id: 8, clicked: false },
      { id: 9, clicked: false },
    ],
    userChoicesArr=[],
    compChoiceesArr=[],


  }

  selectImage = (image) => {
    switch (image) {
      case "X":
        return X;
      case "O":
        return O;
      default:
        return E;
    };
  };

  squareClick = (i) => {
    const oppo = !i.clicked
    this.setState({
      divs: this.state.divs.map(div => {
        if (div.id === i.id) {
          return { id: i.id, clicked: oppo }
        }
        else {
          return div
        };
      }
    })
  });
  this.setState({userChoicesArr: [i.id, ...this.state.userChoicesArr]})
}


render() {
  return (
    <>
      <Header style={{ textAlign: "center", marginTop: "25px" }}>
        <h1>TIC TAC TOE</h1>
      </Header>

      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid columns={3} style={{
          width: "450px",
          display: "flex",
          alignItems: "center",
          width: "150px",
          border: "solid black 1px"
        }}
        >
          <Grid.Row>

            {this.state.divs.map(
              div => (
                <Square key={div.id} div={div} squareClick={this.squareClick} />))}

          </Grid.Row>
        </Grid>
      </Container>

      <Square image={O} />
    </>
  )
}
}



export default Game;