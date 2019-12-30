import React from "react";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";




function PaletteFooter(props) {
    const { paletteName, emoji, classes} = props; //not this.props because it is a functional component, not a class component, we don't have state , so we can make it a funciton
    return (
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>  
    );
}

export default withStyles(styles)(PaletteFooter);