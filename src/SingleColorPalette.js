import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import styles from './styles/PaletteStyles';
import { withStyles } from "@material-ui/styles";
// import './ColorBox.css'



class SingleColorPalette extends Component {
    constructor(props){
        super(props);

        //we are not changing state, so we don't need to use this.state here
        //we are simply grabbing the existing shades from the palette 
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades)
        this.state = {
            format: "hex"

        };
        this.changeFormat = this.changeFormat.bind(this);
        // this.state = {
        //     shades: this.gatherShades(this.props.palette)
        // }
    }


    gatherShades(palette, colorToFilterBy){
        let shades = []
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        //return all shades of given color
        //slice it from index 1 to the end. We don't want the first shade because that is white 
        return shades.slice(1);
    }

    changeFormat(val){
        this.setState({format: val})
    }


    render() {
        const {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette
        const {classes} = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]} 
                showingFullPalette={false}
            />
        ))
        return(
            <div className={classes.Palette}>
            <NavBar handleChange={this.changeFormat} showingAllColors={false}/>

                <div className={classes.colors}> 
                    {colorBoxes}
                    {/* ColorBox class below is still being used by the back button. ColorBox css class is not being used by the ColorBox.js because we changed that to a jss class */}
                    <div className={classes.goBack}>
                        {/*Go Back Button */}
                        <Link to={`/palette/${id}`} className=''>Go Back</Link>
                    </div>
                
                </div>


                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);