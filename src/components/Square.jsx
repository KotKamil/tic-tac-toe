const Square = (props) => {
    const { id, value } = props.info;
    return (
        <div className="Square" onClick={() => props.handleClick(id)}>{value}</div>
    );
}

export default Square;