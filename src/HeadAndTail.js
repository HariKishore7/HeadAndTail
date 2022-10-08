import React, { useState } from "react";

function HeadAndTail() {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [prev, setPerv] = useState();
  const [i, setI] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = () => {
    const data1 = data.slice(0);
    let str = "";
    if (value === "Select") {
      alert("Please select any one option");
      return;
    }

    if (value === prev) {
      let inc = i + 1;
      setI(inc);
      str = data1[inc];
      const prevlen = data1[inc - 1]?.length - 2;
      let spaces;
      if (str) {
        spaces = " ".repeat(prevlen - str.length);
        data1[inc] = `${str}${spaces}${value} `;
      } else {
        spaces = " ".repeat(prevlen);
        data1[inc] = `${spaces}${value} `;
      }
    } else {
      setI(0);
      str = data1[0];
      if (str === undefined) {
        data1[0] = value+ " ";
      } else {
        data1[0] = str + value+" ";
      }
    }
    setPerv(value);
    setValue("Select");
    setIsShown(true);
    setData(data1);
  };

  return (
    <div>
      <div className="row">
        <div className="col-auto">
          <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setIsDisabled(false);
            }}
            defaultValue="Select"
            className="form-select my"
            aria-label="Default select example"
          >
            <option value="Select">Select</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
        </div>
        <div className="col col-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-auto">
          {!isShown
            ? ""
            : data.map((val, idx) => {
                return (
                  <pre className="fs-5 m-0" key={idx}>
                    {val}
                  </pre>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default HeadAndTail;
