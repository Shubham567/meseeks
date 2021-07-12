/*************************************************************************************
 * Use Custom Event Hook
 *
 * @param {string} eventName Name of the event to be attached to an element
 * @param {} initialData Inital data to be initialized to state
 * @param {function} mutateData Function To mutate data based on parameters, event and data
 *
 * @returns {Array} Returns array of Ref and Current State
 *************************************************************************************/

import {useState, useRef, useEffect} from 'react';

const useEvent = (eventName,initialData,mutateData) => {

  const elementRef = useRef(null);
  const [state,setState] = useState({data:initialData, handleEvent: null});

  useEffect(() => {
    const handler  = {...state, handleEvent: e => setState({...state, data: mutateData(e, state.data)})};
    elementRef.current.addEventListener(eventName, handler);

    return () => {
      elementRef.current.removeEventListener(eventName, handler);
    };
  }, [mutateData,eventName,elementRef]);


  return [elementRef,state.data];

}

export default useEvent;
