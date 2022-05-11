import { useAtom } from 'jotai'
import { counterAtom } from './store'
// import { textState, textWritable, textWriteOnly } from './store'

//It can be used like React.useState:
function Use() {
  const [count, setCount] = useAtom(counterAtom)

  const increte = () => { 
    setCount((num) => num + 1) 
  } 
  const decrete = () => { 
    setCount((num) => num - 1) 
  } 
  const reset = () => { 
    setCount((num) => 0) 
  }

  return (
    <>
      {count}
      <br />
			<button onClick={increte}> + </button>
			<button onClick={decrete}> - </button>
			<button onClick={reset}> reset </button>

    </>
  )
}

//   const [text, setText] = useAtom(textState)
//   const onChangeState = (event) => {
//     setText(event.target.value)
//   }

//   const [data, setData] = useAtom(textWritable)
//   const onChangeWritable = (event) => {
//     setData(event.target.value)
//   }
  
//   const [, setOnly] = useAtom(textWriteOnly)
//   const onChangeWriteOnly = (event) => {
//     setOnly(event.target.value)
//   }

//   return (
//     <>
//       <hr />
//       <h4>State, setState</h4>
//       <input type="text" value={text} onChange={onChangeState} />
//       <br />
//       {text}

//       <hr />
//       <h4>State Writable(Accumulate)</h4>
//       <input type="text" value={data} onChange={onChangeWritable} />
//       <br />
//       {data}

//       <hr />
//       <h4>Write Only</h4>
//       <input type="text" value={data} onChange={onChangeWriteOnly} />
//       <br />
//       {data}
//     </>
//   )
// }

export default Use