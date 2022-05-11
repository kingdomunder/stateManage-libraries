import React, { useState  } from "react";
import constate from 'constate';

function Store() {
  
  // 1️⃣ Create a custom hook as usual
  const TextState = () => {
    const [state, setState] = useState("state default");
    return { state, setState };
  }
    
  // 2️⃣ Wrap your hook with the constate factory
  const [StateProvider, useStateContext] = constate(TextState);

  // 3️⃣ Use context instead of custom hook
  function Hook() {
    const { state } = useStateContext();
    return <>{state}</>
  }

  return (
    <StateProvider>
      <Hook />
    </StateProvider>
  )

}

export default Store



// const [UserProvider, useUserValue, useUserUpdate] = constate(
// 	useUser,
//   value => value.user,
//   value => value.setUser
// );

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