import React, { useState } from "react";
import StateContext from "./index";

function Use(prop) {
  const stateContext = prop.StateContext

  console.log(stateContext)

  // 3️⃣ Use context instead of custom hook
  // const { state } = stateContext;

  return (
    <>
      <hr />
      <h4>State, setState</h4>
      <br />
      {/* {state} */}
    </>
  )
}

export default Use

// function UserInfo() {
//   const user = useUserValue();
//   if (!user) return <div>사용자 정보가 없습니다.</div>;
//   return <div>{user.username}</div>;
// }

// function Authenticate() {
//   const setUser = useUserUpdate();
//   const onClick = () => {
//     setUser({ username: "velopert" });
//   };
//   return <button onClick={onClick}>사용자 인증</button>;
// }

