import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setData, setNumber } from "../../store/action/quiz";
import { Form, Field } from "react-final-form";
import TimerCountdown from "../../component/timer";

const QuizPages = (props) => {
  const dispatch = useDispatch();

  const { data, timer, number, allJawaban } = useSelector(
    ({ quiz }) => ({
      data: quiz.data,
      timer: quiz.timer,
      number: quiz.number,
      allJawaban: quiz.allJawaban,
    }),
    shallowEqual
  );

  const [listJawaban, setListjawaban] = useState([]);

  let numberStorage =
    localStorage.getItem("currentNumber") === null
      ? 0
      : JSON.parse(localStorage.getItem("currentNumber"));

  useEffect(() => {
    if (numberStorage == data.length) {
      props.onClickNext();
    }
  }, [numberStorage]);

  const onSubmit = async (values) => {
    const nextQuestion = numberStorage + 1;
    setListjawaban([...listJawaban, values]);
    dispatch(setNumber(nextQuestion));
    localStorage.setItem("currentNumber", JSON.stringify(nextQuestion));
    localStorage.setItem(
      "dataJawaban",
      JSON.stringify([...listJawaban, values])
    );
  };

  console.warn(number);

  return (
    <>
      <Card className="shadow-lg w-50 h-50 ">
        <div>
          <Card.Header
            className="d-flex justify-content-between align-items-center
          "
          >
            Question {numberStorage + 1}/{data.length}
            <TimerCountdown onClickNext={() => props.onClickNext()} />
          </Card.Header>
        </div>

        <Card.Body className="d-flex flex-column align-items-center justify-content-center ">
          <Card.Text>{data[numberStorage]?.question}</Card.Text>

          {/* >>>form<<< */}
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-2 px-5">
                  {data[numberStorage]?.answerOption?.map((item, idx) => (
                    <>
                      <label key={idx}>
                        <Field
                          name="survey"
                          component="input"
                          type="radio"
                          value={item.answerText}
                        />{" "}
                        {item.answerText}
                      </label>
                    </>
                  ))}
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <Button
                    type="submit"
                    disabled={submitting || pristine}
                    variant="primary"
                  >
                    Next Question
                  </Button>
                </div>
              </form>
            )}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default QuizPages;
