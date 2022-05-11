import { atom } from 'jotai'

// First create a primitive atom
export const counterAtom = atom(0)

// Creating an atom from multiple atoms
// You can combine multiple atoms to create a derived atom.
// const addData = atom("add data")

// const addedData = atom((get) => get(textState) + get(addData))

// export const textWritable = atom(
//   (get) => get(textState),
//   (get, set, newValue) => set(textState, get(textState) + " + " + newValue)
// )

// export const textWriteOnly = atom(
//   null,
//   (get, set, newValue) => set(textState, newValue)
// )