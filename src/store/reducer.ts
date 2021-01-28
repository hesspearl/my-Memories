import { CREATE } from "./action"

const posts:Inputs[]=[]
 



export default (state=posts, action:Action):Inputs[]=>{
    switch(action.type){
        case CREATE:
            return [...state,action.value]
    }
return state
}