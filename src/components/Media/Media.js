
import React, { useEffect, useRef } from 'react';
function Media() {
    const mediaRef = useRef(null);

  
    React.useEffect(() => {
        if (mediaRef.current) {
            mediaRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
    return (
<section id="media" ref={mediaRef}>
<h2 className="text-3xl font-bold underline">
    Social Media Links and Contact Information
    </h2>
                <ul>
                    <li><a href="https://www.instagram.com/thecryptidlitter/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/thecryptidlitter/">Facebook</a></li>
                    <li><a href="https://www.twitter.com/thecryptidlitter/">Twitter</a></li>
                </ul>
                </section >    );
}

export default Media;