import { useRef, useEffect } from 'react';
import style from '../bracket.module.css';
import BracketPair from '../BracketPair/BracketPair';

const ThirtytwoTeamBracket = ({ bracket, tourId, creator, tourStatus }) => {
  const refBracketWr = useRef(null);

  useEffect(() => {
    // Select the node that will be observed for mutations
    const targetNode = refBracketWr.current;

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true, characterData: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.target.offsetParent?.classList.add(style.change);
          setTimeout(() => {
            mutation.target.offsetParent?.classList.remove(style.change);
          }, 600);
        } else if (mutation.type === 'attributes') {
        } else if (mutation.type === 'characterData') {
          mutation.target.parentNode.parentNode.classList.add(style.change);
          setTimeout(() => {
            mutation.target.parentNode.parentNode.classList.remove(style.change);
          }, 600);
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={refBracketWr} className={`${style['playoff-table']}`}>
      <div className={`${style['playoff-table-content']}`}>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[0]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[1]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[2]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[3]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[4]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[5]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[6]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[7]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[8]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[9]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[10]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[11]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[12]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[13]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[14]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneSixteenth[15]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[0]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[1]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[2]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[3]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[4]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[5]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[6]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[7]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[0]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[1]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[2]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[3]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.semifinal[0]} creator={creator} tourStatus={tourStatus} />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.semifinal[1]} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.final} creator={creator} tourStatus={tourStatus} />
            </div>
          </div>
          <div className={`${style['playoff-table-third-place']} ${style['playoff-table-pair-style']}`}>
            <BracketPair tourId={tourId} match={bracket.thirdPlace} creator={creator} tourStatus={tourStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtytwoTeamBracket;
