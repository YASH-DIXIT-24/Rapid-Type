import { useEffect,useState } from "react";

export default useSentenceData=(reload) => {
    const [sentence,setSentence]= useState('');
    const fetchSentence= async () => {
      let res=await fetch('http://localhost:3000/random-sentence');
      let data=(await res.json());
      setSentence((data.sentence).toLowerCase());
    }
    useEffect(() => {
        fetchSentence()
    }, [reload]);
    return (sentence)
}