import {useEffect} from 'react';

function AutosizeTextArea(textAreaRef, value) {
    useEffect(() => {
        if(textAreaRef){
            textAreaRef.style.height = 'auto';
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = `${scrollHeight}px`;
        }
    },[textAreaRef, value]);
}

export default AutosizeTextArea;