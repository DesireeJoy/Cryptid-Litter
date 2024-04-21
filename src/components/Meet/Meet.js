
import React, { useEffect, useRef } from 'react';
import '../../styles/Meet.scss';
import CardGroup from '../CardGroup/CardGroup';
import * as MeetConstants from './Meet-constants'
import RoundedParagraph from '../RoundedParagraph/RoundedParagraph';

function Meet() {

  const meetRef = useRef(null);

  
  React.useEffect(() => {
      if (meetRef.current) {
        meetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, []);

  return (

    <section id="who">

<RoundedParagraph title="Who are the Cryptids?" text="Meet the Cryptid Litter —a charming group of Australian Labradoodle puppies born to Nessie, a mini
        Australian Labradoodle. Nessie's journey began as one of forty dogs rescued from an Ohio puppy mill
        surrender. Join these adorable pups on their adventures as they embark on a new chapter filled with
        love, hope, and the joys of finding their forever homes." >
 </RoundedParagraph>
      <div className="container" ref={meetRef}>
        <CardGroup>{MeetConstants.card1}{MeetConstants.card2}{MeetConstants.card3}{MeetConstants.card4}{MeetConstants.card5}{MeetConstants.card6}{MeetConstants.card7}
        </CardGroup>
     

      </div>



    </section >

  )
}

export default Meet;