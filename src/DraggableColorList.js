import React from 'react';
import DraggableColorBox from "./DraggableColorBox"
import {SortableContainer} from 'react-sortable-hoc';


//We wrap a DraggableColorBox component in a DraggableColorList Component - 
//then we insert the 'DraggableColorBox' component into 'NewPaletteForm.js'
//{colors, removeColor} means - grab 'colors' from the props
const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return(
        <div style={{height: "100%"}}>
        {colors.map((color, i)=> (
            <DraggableColorBox
                index={i} 
                key={color.name}
                color={color.color}
                name={color.name}
                handleClick={() => removeColor(color.name)}
            />

        ))}
        </div>
    )
})

export default DraggableColorList;