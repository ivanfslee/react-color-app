import React from 'react';
import { withStyles } from "@material-ui/styles";
import styles from './styles/MiniPaletteStyles'



function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props; //not a class based component so it is just 'props' and not 'this.props' . we are in a function based component 
    console.log(classes)
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ))
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
            {/*mini color boxes here  */}
            {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette); //higher order component