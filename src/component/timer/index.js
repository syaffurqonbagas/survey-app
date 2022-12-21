import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

const TimerCountdown = (props) => {
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={[["#004777"], ["#F7B801"], ["#A30000"]]}
        onComplete={() => props.onClickNext()}
        size={60}
      >
        {renderTime}
      </CountdownCircleTimer>
    </>
  );
};

export default TimerCountdown;
