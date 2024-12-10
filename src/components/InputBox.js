import { useState } from "react";

const InputBox = ({ name = "", id, submit, cancel }) => {
  const [value, setValue] = useState(name);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        //   onBlur={}
      />

      <button
      className="action-btn" 
        onClick={() => {
          submit(id, value);
          cancel();
        }}
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button className="action-btn"  onClick={cancel}><i className="fa-solid fa-circle-xmark"></i></button>
    </>
  );
};

export default InputBox;
