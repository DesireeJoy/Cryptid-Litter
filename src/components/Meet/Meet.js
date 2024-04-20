import Lyca from '../../images/Lyca.png';
import Nessie from '../../images/Nessie.png';
import Rou from '../../images/Rou.png';
import Sassy from '../../images/Sassy.png';
import Wendi from '../../images/Wendi.png';
import Yeti from '../../images/Yeti.png';
import Kraken from '../../images/Kraken.png'
import '../../styles/Meet.scss';
import CryptidCard from '../CryptidCard/CryptidCard';
import CardGroup from '../CardGroup/CardGroup';


function Meet() {


const buttonOneTitle = "Learn More!"
const buttonTwoTitle = "I don't know!"
  const card1 = (
    <><CryptidCard title="Nessie" subTitle="Mama" image={Nessie} imageAlt='Brown Aussie Labradoodle who went from a puppy mill puppy to a first time mama of six' text='Puppy Mill Rescue turned Mama of Six' buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

    </CryptidCard></>

  );
  const card2 = (<>  <CryptidCard title="Kraken" subTitle="Little Prince" image={Kraken} imageAlt='Little drama prince with a heart of gold' text='Little drama prince with a heart of gold' buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

  </CryptidCard> </>)

  const card3 = (<>  <CryptidCard title="Lycan" subTitle="Sweet Bean" image={Lyca} imageAlt='The sweetest of the bunch' text="Mama's little girl, she's got your back." buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

  </CryptidCard> </>) 
  const card4 = (<>  <CryptidCard title="Wendigo" subTitle="Little Girl with a Big Job" image={Wendi} imageAlt='Little drama prince with a heart of gold' text='Little drama prince with a heart of gold' buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

  </CryptidCard> </>) 
  const card5 = (<>  <CryptidCard title="Rougarou" subTitle="Overachiever" image={Rou} imageAlt='Theatre dog with service tasks, overall over-achiever' text='Theatre dog with service tasks, overall over-achiever' buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

  </CryptidCard> </>) 
  const card6 = (<>  <CryptidCard title="Yeti" subTitle="Big Bro" image={Yeti} imageAlt='Big Brother, has fun, protects' text='Big Brother, has fun, protects' buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

  </CryptidCard> </>)
    const card7 = (<>  <CryptidCard title="Sassy" subTitle="Little Prince" image={Sassy} imageAlt='Protector, watch out for that Sassy slap!' text='Protector, watch out for that Sassy slap!' buttonOneTitle={buttonOneTitle} buttonTwoTitle={buttonTwoTitle}>

    </CryptidCard> </>)
  return (

    <section id="who">
      <br /><br /><br /><br /><br /><br /><br />


      <h2 >Who are the Cryptid Litter?</h2>
      <p>Meet the Cryptid Litter —a charming group of Australian Labradoodle puppies born to Nessie, a mini
        Australian Labradoodle. Nessie's journey began as one of forty dogs rescued from an Ohio puppy mill
        surrender. Join these adorable pups on their adventures as they embark on a new chapter filled with
        love, hope, and the joys of finding their forever homes. </p>


      <div className="container">
        <CardGroup>{card1}{card2}{card3}{card4}{card5}{card6}{card7}
        </CardGroup>
     

      </div>



    </section >

  )
}

export default Meet;