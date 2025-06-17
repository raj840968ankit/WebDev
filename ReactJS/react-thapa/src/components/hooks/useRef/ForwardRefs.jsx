
import { useId, useRef } from "react";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const userCredential = {
      username : username.current.value,
      password : password.current.value
    }
    console.log(userCredential);
    username.current.value = ""
    password.current.value = ""
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <BeforeReact19Input label="username" ref={username} />
      <BeforeReact19Input label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
};

//! I need to create BeforeReact19Input

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });


//! afterReact v19
const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
};
