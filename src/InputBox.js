import React  from 'react';

const InputBox = (props, context) => (
  <div>
  <form onSubmit={props.handleSubmit}>
    <label>
      <input type="text" value={props.commentValue} onChange={props.handleChange} />
    </label>
    <input type="submit" value="s" />
  </form>
  </div>
);
export {InputBox as default}
/*  <button onClick={hideComent}>hide</button>*/
