import { useEffect, useRef } from 'react';
import './newPrompt.css'
const NewPrompt = () => {

      // For automting scroll down updating chat.
  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:"smooth"});
  },[]);

  return (
    <>
        {/* Add new Chat */}
        <div>TEST</div>
        <div className="endChat" ref={endRef}></div>
        <div className="newForm">
            <label htmlFor="file">
                <img src="../../../public/attachment.png" alt="" />
            </label>
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