import React, { useEffect, useRef } from 'react';
import RoundedParagraph from '../RoundedParagraph/RoundedParagraph';
import LeftImageFlex from '../LeftImageFlex/LeftImageFlex';
import bookImage from '../../images/unsplashBook.jpg';

function Book() {
    const bookRef = useRef(null);
const bookText = (<> <a href='/'>Link to The Book Trailer</a>
<h3>Book Tour?</h3>
 <ul>
     <li>October 31 - Halloween Bash at the Haunted House</li>
     <li>November 15 - Cryptid Convention at the Convention Center</li>
     <li>December 20 - Winter Solstice Celebration at the Stone Circle</li>
 </ul></>);
  
    React.useEffect(() => {
        if (bookRef.current) {
            bookRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
    return (
        <section id="book" ref={bookRef}>
        <RoundedParagraph title="Upcoming Book Release" text="Lookit this exciting paragraph about the upcoming book about foster puppies that Alisa hasn't written yet! Isn't it exciting?" >
 </RoundedParagraph>
<LeftImageFlex image={bookImage} text={bookText}>
</LeftImageFlex>
    </section>    );
}

export default Book;