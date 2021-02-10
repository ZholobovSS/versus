import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './match.module.css';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMatchData, plusPoint, minusPoint, endMatch } from '../../redux/actionCreators/match';

const Match = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [timer, setTimer] = useState(0);

  const matchData = useSelector((state) => state.matchReducer.match);

  useEffect(() => {
    dispatch(getMatchData(id));
  }, []);

  const onTimerUpdate = ({ time, duration }) => {
    setTimer(time);
  };

  const endMatchHandler = () => {
    dispatch(endMatch(id, timer));
    history.push('/bracket');
  };

  return (
    <div className={style.container}>
      <Timer active duration={null} onTimeUpdate={onTimerUpdate}>
        <Timecode className={style.timer} />
      </Timer>
      <div className={style.match}>
        <div className={style.player}>
          <h4>{matchData?.player1?.login}</h4>
          <p>Score: {matchData?.score?.player1}</p>
          <button onClick={() => dispatch(minusPoint(matchData?._id, 'player1'))}>-</button>
          <button onClick={() => dispatch(plusPoint(matchData?._id, 'player1'))}>+</button>
        </div>
        <div className={style.player}>
          <h4>vs</h4>
        </div>
        <div className={style.player}>
          <h4>{matchData?.player2?.login}</h4>
          <p>Score: {matchData?.score?.player2}</p>
          <button onClick={() => dispatch(minusPoint(matchData?._id, 'player2'))}>-</button>
          <button onClick={() => dispatch(plusPoint(matchData?._id, 'player2'))}>+</button>
        </div>
      </div>
      <button onClick={() => endMatchHandler()}>Завершить матч</button>
    </div>
  );
};

export default Match;