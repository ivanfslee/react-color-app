import React from 'react';
import {SortableElement} from "react-sortable-hoc";
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
    root: {
        height: "100px",
        width: "100px",
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        // marginBottom: is -3.5 px in colts video
        marginBottom: "-4px",
        //hover over an svg which is the trash can icon (trash can icon is an svg)
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)",
            
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        //transform and color changes will change over .3 seconds 
        transition: "all 0.3s ease-in-out"
    }
}



//functional component - not class-based component
const DraggableColorBox = SortableElement((props) => {
    const {classes, handleClick, name, color} = props; // classes = props.classes, handleClick = props.handleClick
    return(
        <div 
            className={classes.root}
            style={{backgroundColor: color}}
        >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>

            </div>
        </div>
    );
})


export default withStyles(styles)(DraggableColorBox);