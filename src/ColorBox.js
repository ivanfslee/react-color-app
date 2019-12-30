import React, { Component } from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Link} from 'react-router-dom';
// import chroma from "chroma-js";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {copied: false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        });
    }


    render() {
        // classes is from const styles - jss - 
        const {name, background, moreUrl, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        //.luminance gives a value of 0 and 1 - 0 is black 1 is white.
        //.luminance is a method from the chroma-js library
        // const isDarkColor = chroma(background).luminance() <= 0.08;
        // const isLightColor = chroma(background).luminance() >= 0.7;
        return (
            <CopyToClipboard text={this.props.background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            {/* the  className below controls whether the text shows up as light or dark by applying a certain css class*/}
                            <span className={classes.colorName}>
                                {name} {/*{chroma(background).luminance()}*/}
                            </span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                    <Link 
                        to={moreUrl} 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className={classes.seeMore}>MORE</span>
                    </Link> 
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}


export default withStyles(styles)(ColorBox);