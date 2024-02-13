import { useEffect, useRef, useState } from "react";
import "../App.css";
// eslint-disable-next-line react/prop-types
const CheckoutStepper = ({ steps = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const ActiveComponent = steps[currentStep - 1].Component;
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };
  const calculateWidth = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };
  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steps.length - 1].offsetWidth / 2,
    });
  }, [stepRef.current]);
  return (
    <>
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isCompleted ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="number">
                {currentStep > index + 1 || isCompleted ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step_name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress_bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateWidth()}%` }}
          ></div>
        </div>
      </div>
      <div className="btn_container">
        <ActiveComponent />
        {!isCompleted && (
          <button className="btn" onClick={() => handleNext()}>
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default CheckoutStepper;
