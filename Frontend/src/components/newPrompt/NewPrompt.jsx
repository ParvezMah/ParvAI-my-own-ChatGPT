import { useEffect, useRef } from 'react';
import './newPrompt.css'
import Upload from '../upload/Upload';
const NewPrompt = () => {

    // For automatic scroll down updating chat.
    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current.scrollIntoView({behavior:"smooth"});
    },[]);

    return (
        <>
            {/* Add new Chat */}
            <div>TEST</div>
            {/* For automatic scroll down updating chat. */}
            <div className="endChat" ref={endRef}></div>
            <div className="newForm">
                <Upload/>
                <input id="file" type="file" multiple={false} hidden name="" />
                <input type="text" placeholder="Ask me anything........."/>
                <button>
                    <img src="../../../public/arrow.png" alt="" />
                </button>
            </div>
        </>
    )
}

export default NewPrompt