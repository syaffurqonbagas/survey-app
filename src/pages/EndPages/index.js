import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { setNumber } from "../../store/action/quiz";
import { useDispatch } from "react-redux";

const EndPages = (props) => {
  const dispatch = useDispatch();

  const reset = () => {
    props.onClickNext();
    localStorage.clear();
  };

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      reset();
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const jawaban = JSON.parse(localStorage.getItem("dataJawaban"));

  return (
    <>
      <Card>
        <Card.Header>Thank You For Your Answer </Card.Header>
        <div className="m-4">
          <Card.Body>
            {jawaban?.map((item) => (
              <Card.Text>{item.survey}</Card.Text>
            ))}
          </Card.Body>
          <Button className="m-3" variant="primary" onClick={reset}>
            Survei Again
          </Button>
        </div>
      </Card>
    </>
  );
};

export default EndPages;
