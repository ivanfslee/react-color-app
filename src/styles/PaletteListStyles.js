export default {
    root: {
        backgroundColor: "blue",
        height: "100vh",  // takes up the full screen 100 view height 
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white",
            textDecoration: "none"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)", //create grid 3 columns, each 30 percent of screen
        gridGap: "5%" //5% of width of screen in between the columns  30, 5, 30, 5, 30

    }
}