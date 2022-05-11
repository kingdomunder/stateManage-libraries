import React from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store"

function Use() {
  const [text, setText] = useRecoilState(counterAtom)
  const onChangeState = (event) => {
    setText(event.target.value)
  }

  const getter = useRecoilValue(counterAtom)


  // const [counter, setCounter] = useRecoilState(counterAtom); 

  const setter = useSetRecoilState(counterAtom);

  const increte = () => {
    setter((num) => num + 1)
  }

  const decrete = () => {
    setter((num) => num - 1)
  }

  const reset = () => {
    setter((num) => 0)
  }

  // const setter = useSetRecoilState(textState)
  // const onChangeSetter = (event) => {
  //   setter(event.target.value)
  // }
  
  // const [selectorData, setSelectData] = useRecoilState(textSelector)
  // const onChangeSelector = (event) => {
  //   setSelectData(event.target.value)
  // }
  
  return (
    <>
      <hr />
      <h4>State, setState</h4>
      <input type="text" value={text} onChange={onChangeState} />
      <br />
      {text}
      
      <hr />
      <h4>Getter Only</h4>
      {getter}

      <br />
			<button onClick={increte}> + </button>
			<button onClick={decrete}> - </button>
			<button onClick={reset}> reset </button>

      {/* <hr />
      <h4>Setter Only</h4>
      <input type="text" value={text} onChange={onChangeSetter} />
      <br />

      <hr />
      <h4>Selector(Accumulate)</h4>
      <input type="text" value={selectorData} onChange={onChangeSelector} />
      <br /> */}

    </>
  )
}

export default Use