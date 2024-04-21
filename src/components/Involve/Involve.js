
import React, { useEffect, useRef } from 'react';
function Involve() {
    const involveRef = useRef(null);

  
    React.useEffect(() => {
        if (involveRef.current) {
            involveRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
  
  return (
<section id="media" ref={involveRef}>
                <h2>Get Involved</h2>
                <ul>
                    <li><a href="https://www.instagram.com/thecryptidlitter/">Foster</a></li>
                    <li><a href="https://www.facebook.com/thecryptidlitter/">Adopt</a></li>
                    <li><a href="https://www.twitter.com/thecryptidlitter/">Donate</a></li>
                </ul>
                </section >   );
}

export default Involve;