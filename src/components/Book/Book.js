import React, { useEffect, useRef } from 'react';
function Book() {
    const bookRef = useRef(null);

  
    React.useEffect(() => {
        if (bookRef.current) {
            bookRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
    return (
        <section id="book" ref={bookRef}>
        <h2>Upcoming Book Release</h2>
        <ul>
            <li>October 31 - Halloween Bash at the Haunted House</li>
            <li>November 15 - Cryptid Convention at the Convention Center</li>
            <li>December 20 - Winter Solstice Celebration at the Stone Circle</li>
        </ul>
    </section>    );
}

export default Book;