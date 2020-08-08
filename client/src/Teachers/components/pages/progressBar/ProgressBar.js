import React from "react";
import "./ProgressBar.scss";

const ProgressBar = (props) => {
  let { progressPercentage } = props;
  return (
    <>
       {progressPercentage === 100 ? (
        <span className="progress_success_text">Successfully Uploaded!</span>
      ) : ( 
        <>
           {progressPercentage > 0 && ( 
            <div className="gog_progress_bar">
              <Filler percentage={progressPercentage} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProgressBar;

const Filler = (props) => {
  // return <div className=""
  //         style={{ width: `${props.percentage}%`}}/>
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-info progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow=""
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${props.percentage}%`}}
      >
        {Math.round(props.percentage)}%
      </div>
    </div>
  );
};
