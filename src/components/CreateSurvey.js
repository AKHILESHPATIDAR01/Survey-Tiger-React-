import Questions from "./Questions";
import TypeSelector from "./TypeSelector";
import Options from "./Options";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateSurvey = ({ setSquestions, squestions }) => {
  const getRandom = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };

  const history = useHistory();
  const defaultOptionState = [
    { uid: getRandom(), value: "" },
    { uid: getRandom(), value: "" }
  ];
  const [qText, setQtext] = useState("");
  const [qType, setQtype] = useState(0);
  const [options, setOptions] = useState(defaultOptionState);

  const updateSurveyQuestion = () => {
    let newSurveyQuestion = [...squestions];
    let newQ = {
      qtext: qText,
      qtype: qType,
      options: options
    };
    newSurveyQuestion.push(newQ);
    setSquestions(newSurveyQuestion);
    setQtype(0);
    setQtext("");
    setOptions(defaultOptionState);
  };

  const publish = () => {
    updateSurveyQuestion();
    history.push("/published");
  };

  const addOptions = () => {
    let newOptions = {
      uid: getRandom(),
      value: ""
    };

    let updatedOptions = [...options];
    updatedOptions.push(newOptions);
    setOptions(updatedOptions);
  };

  const deleteOptions = () => {
    if (options.length === 2) {
      alert("Error: A select option should have atlest two options ");
    } else {
      let updatedOptions = [...options];
      updatedOptions.pop();
      setOptions(updatedOptions);
    }
  };

  const updatedOptionText = (id, text) => {
    let updateOptions = [...options];
    let changeIndex = updateOptions.findIndex((x) => x.uid === id);
    updateOptions[changeIndex].value = text;
    setOptions(updateOptions);
  };

  return (
    <>
      <TypeSelector qType={qType} setQtype={setQtype} />

      {qType !== 0 ? (
        <>
          <Questions onTextUpdate={setQtext} />
          {options.map((opt, key) => (
            <Options
              key={key}
              uid={opt.uid}
              addOptions={addOptions}
              deleteOptions={deleteOptions}
              updateText={updatedOptionText}
            />
          ))}

          <button
            className="btn btn-primary my-3"
            onClick={() => updateSurveyQuestion()}
          >
            Add Question
          </button>
          <button className="btn btn-primary my-3" onClick={() => publish()}>
            Publish
          </button>
        </>
      ) : null}
    </>
  );
};

export default CreateSurvey;
