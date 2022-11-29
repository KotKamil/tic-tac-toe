const ScoreBoard = (props) => {
    return (
        <div className="ScoreBoard">
            <div className="x-wins ScoreField">X wins: {props.xWins}</div>
            <div className="o-wins ScoreField">Y wins: {props.oWins}</div>
            <div className="draws ScoreField">Draws: {props.draws}</div>
        </div>
    );
}

export default ScoreBoard;