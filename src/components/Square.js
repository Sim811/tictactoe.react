import React from "react";
import { Icon } from "semantic-ui-react";



const Square = (props) => (

  <div >
    <Grid columns={3} style={{
      width: "450px",
      display: "flex",
      alignItems: "center",
      width: "150px",
      border: "solid black 1px"
    }}
    >
      <Icon name="X" />
      {this.props.div}
    </Grid>
  </div>

);



export default Square;