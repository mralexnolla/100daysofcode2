import React from 'react'

const Adventure = () => {

    const initialWagonState = {
        supplies: 100,
        distance: 0,
        days: 0
    }

    const adventureReducer = (state = initialWagonState, action) => {
        switch(action.type){
            case 'gather': {
                return{
                    ...state, 
                    supplies: state.supplies + 15,
                    days: state.day + 1
                }
            }
            case 'travel':{
                return{
                    ...state,
                    supplies: state.supplies - 20,
                    distance: state.distance + 10,
                    days: state.days + action.payload
                }
            }
            case 'tippedWagon':{
                return{
                    ...state,
                    supplies: state.supplies - 30,
                    days: state.days + 1
                }
            }

            default:
                return state
        }
    }

    let wagon = adventureReducer(undefined, {})
    console.log("calling the reducer with an undefined state and empty action object ",wagon)

    wagon = adventureReducer(wagon, {type:'travel', payload: 1})
    console.log("First day is dedicated to travel ",wagon)

    wagon = adventureReducer(wagon, {type:'gather', payload: 0})
    console.log("On second day we stop to gather supplies ",wagon)

    wagon = adventureReducer(wagon, {type:'tippedWagon', payload: 0})
    console.log("On the third day, we try to ford a rushing river…and our wagon tips over, spilling some supplies ",wagon)

    wagon = adventureReducer(wagon, {type:'travel', payload: 3})
    console.log("On the following day, we set out for a long 3 days of travel ",wagon)

    return ( <div></div> );
}
 
export default Adventure;