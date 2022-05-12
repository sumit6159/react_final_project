export const ADDITEM = 'ADDITEM'
export const REMOVEITEM = "REMOVEITEM"

export const addItem=(product)=>({type:ADDITEM, payload:product})
export const remItem=(product)=>({type:REMOVEITEM, payload:product})