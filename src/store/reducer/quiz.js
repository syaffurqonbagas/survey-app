import {
  SET_CURRENT_DATA,
  SET_TIMER,
  SET_CURRENT_NUMBER,
} from "../action/quiz";

const intialState = {
  timer: 120,
  number: 0,
  allJawaban: [],
  data: [
    {
      question: "Seberapa Kamu sering Menggunakan Media Sosial ?",
      answerOption: [
        {
          answerText: "1 jam",
          status: "false",
        },
        {
          answerText: "2 jam",
          status: "false",
        },
        {
          answerText: "3 jam",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu berolahraga ?",
      answerOption: [
        {
          answerText: "1 minggu",
          status: "false",
        },
        {
          answerText: "2 minggu",
          status: "false",
        },
        {
          answerText: "3 minggu",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu menggunakan kamera ?",
      answerOption: [
        {
          answerText: "1 hari",
          status: "false",
        },
        {
          answerText: "2 hari",
          status: "false",
        },
        {
          answerText: "3 hari",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa Kamu sering Menggunakan Media Sosial ?",
      answerOption: [
        {
          answerText: "1 jam",
          status: "false",
        },
        {
          answerText: "2 jam",
          status: "false",
        },
        {
          answerText: "3 jam",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu berolahraga ?",
      answerOption: [
        {
          answerText: "1 minggu",
          status: "false",
        },
        {
          answerText: "2 minggu",
          status: "false",
        },
        {
          answerText: "3 minggu",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu menggunakan kamera ?",
      answerOption: [
        {
          answerText: "1 hari",
          status: "false",
        },
        {
          answerText: "2 hari",
          status: "false",
        },
        {
          answerText: "3 hari",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa Kamu sering Menggunakan Media Sosial ?",
      answerOption: [
        {
          answerText: "1 jam",
          status: "false",
        },
        {
          answerText: "2 jam",
          status: "false",
        },
        {
          answerText: "3 jam",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu berolahraga ?",
      answerOption: [
        {
          answerText: "1 minggu",
          status: "false",
        },
        {
          answerText: "2 minggu",
          status: "false",
        },
        {
          answerText: "3 minggu",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu menggunakan kamera ?",
      answerOption: [
        {
          answerText: "1 hari",
          status: "false",
        },
        {
          answerText: "2 hari",
          status: "false",
        },
        {
          answerText: "3 hari",
          status: "true",
        },
      ],
    },
    {
      question: "Seberapa sering kamu berolahraga ?",
      answerOption: [
        {
          answerText: "1 minggu",
          status: "false",
        },
        {
          answerText: "2 minggu",
          status: "false",
        },
        {
          answerText: "3 minggu",
          status: "true",
        },
      ],
    },
  ],
};

export default (state = intialState, { payload, type }) => {
  switch (type) {
    case SET_CURRENT_DATA:
      return {
        ...intialState,
        allJawaban: payload,
      };
    case SET_CURRENT_NUMBER:
      return {
        ...intialState,
        number: payload,
      };
    case SET_TIMER:
      return {
        ...intialState,
        timer: payload,
      };
    default:
      return state;
  }
};
