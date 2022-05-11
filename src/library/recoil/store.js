import { atom, DefaultValue, selector } from "recoil";

// //특정 상태를 고유 key 값과 함께 선언합니다
// export const textState = atom({
//   key: 'MyAtom',  //내부적으로 atom을 식별하는데 사용되는 고유한 문자열. 
//   default: 'state default'
// })

// //비동기 로직 처리 등
// export const textSelector = selector({
//   key: 'MySelector',
//   get: ({get}) => get(textState) + " + data : ",  //다른 atom이나 selector로부터 값을 찾는데 사용되는 함수.
//   // get: ({get}) => get(textState) + "\n" + " + selector data",  //다른 atom이나 selector로부터 값을 찾는데 사용되는 함수.
//   set: ({set}, newValue) => 
//     set(
//       textState,
//       newValue
//       // newValue instanceof DefaultValue ? newValue : 'set default'
//     )
// })

export const counterAtom = atom({
  key: 'counterKey', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
