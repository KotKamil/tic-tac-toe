import Square from "./Square";

const GameBoard = (props) => {
    const squares = props.squares.map(square => <Square key={square.id} info={square} handleClick={props.handleClick} />);

    return (
        <div className="GameBoard">
            {squares}
        </div>
    );
}

export default GameBoard;