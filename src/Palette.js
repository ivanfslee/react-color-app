import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter';

import { withStyles } from "@material-ui/styles";
import styles from './styles/PaletteStyles';


class Palette extends Component {
    constructor(props){
        super(props);
            this.state = { level: 500, format: "hex" };
            this.changeLevel = this.changeLevel.bind(this)
            this.changeFormat = this.changeFormat.bind(this)
        
    }

    changeLevel(level){          
        // changeLevel(newLevel){
        this.setState({ level }) // same as this.setState( { level: newLevel})
    }

    changeFormat(val){
        this.setState({format: val})
    }

    render() {
        const { colors, paletteName, emoji, id} = this.props.palette; //colors = this.props.palette.colors
        const {classes} = this.props; 
        const { level, format } = this.state; //level = this.state.level
        //For each color in array (seedColors.js) create a ColorBox Component 
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id} 
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette={true} //show 'more' link
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar 
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    // {/* showingAllColors = {true}*/}
                    showingAllColors 
                />
                {/*Navbar goes here */}
                <div className={classes.colors}>
                {/* Bunch of color boxes here */}
                {colorBoxes}
                </div>
                {/* footer here */}
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}


export default withStyles(styles)(Palette);