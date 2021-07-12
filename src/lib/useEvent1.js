const useEvent1 = (eventName, element, data, mutation) => {

  if(!element){
    // in Case of Ref when its not defined
    return undefined;
  }

  const elementRef = useMemo(() => (typeof element === "string" ? document.getElementById(element) : element), [element]);

  const [eventObj, setEventObj] = useState(null);

  useEffect(() => {
    const eventListener =  (e) => { setEventObj({data: mutation(e, )}); };
    setEventObj({data,handleEvent : eventListener});
  }, [data,eventListener,mutation]);

  useEffect(() => {
    elementRef.addEventListener(eventName, eventObj);
    return () => {
      elementRef.removeEventListener(eventName, eventObj);
    };
  }, [eventObj,elementRef,eventName]);


  return eventObj.data;

}

export default useEvent;
