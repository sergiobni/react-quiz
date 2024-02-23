import { useEffect } from 'react';

function Timer({ dispatch, secondsRemaining }) {
  //format timer countdown
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        //   console.log('tick');
        dispatch({ type: 'tick' });
      }, 1000);
      //We need to clear the interval, if not it will be running in the background continiusly and affect future function calls
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
