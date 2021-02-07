import style from '../bracket.module.css';
import { useEffect } from 'react';

const BracketPair = ({ match, startMatchHandler }) => {
  return (
    <div onClick={() => startMatchHandler(match._id)}>
      <div className={`${style['playoff-table-left-player']} ${style['flex-row-sb']}`}>
        <span>{match?.player1?.login}</span>
        <span>{match?.score.player1}</span>
      </div>
      <div className={`${style['playoff-table-right-player']} ${style['flex-row-sb']}`}>
        <span>{match?.player2 ? match.player2.login : match?.phantom}</span>
        <span>{match?.score.player2}</span>
      </div>
    </div>
  );
};

export default BracketPair;
