import { PANI_PURi } from "./cakeType"

const initialState={
    numOfPaniPurisis:100
}
const PaniPuriReducer=(state=initialstate , action)=>{
    switch (action.type){
        case PANI_PURI:
            return{
                numOfPaniPurisis : state.numOfPaniPurisis - 20
            }
            break;

        default: return state;
            break;
    }
}

export default PaniPuriReducer;