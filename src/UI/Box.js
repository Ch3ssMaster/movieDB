import "./Box.css";
const Box = (props) => {
    return ( <div className={props.className}>{props.children}</div> );
}
 
export default Box;