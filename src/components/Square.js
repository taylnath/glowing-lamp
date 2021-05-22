
function Square(props) {
  let side = props.side;
  return (
    <div 
      style={{
        backgroundColor: props.backgroundColor,
        width: `${side - 22}px`,
        height: `${side - 22}px`,
        textAlign:"center",
        border: "2px solid black",
        position: "absolute",
        left: `${props.xPos}px`,
        top: `${props.yPos}px`,
        padding: "10px"
      }}
      onClick={props.changeColor}
    >
      {props.text} 
    </div>
  );
}

export default Square