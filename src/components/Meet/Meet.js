import Lyca from '../../images/Lyca.png';
import Nessie from '../../images/Nessie.png';
import Rou from '../../images/Rou.png';
import Sassy from '../../images/Sassy.png';
import Wendi from '../../images/Wendi.png';
import Yeti from '../../images/Yeti.png';
import Kraken from '../../images/Kraken.png'
import '../../styles/Meet.css';
function Meet() {

  return (
    
        <section id="who">
          <br /><br /><br /><br /><br /><br /><br />
         <h2 >Who are the Cryptid Litter?</h2>
           <p>Meet the Cryptid Litter —a charming group of Australian Labradoodle puppies born to Nessie, a mini
            Australian Labradoodle. Nessie's journey began as one of forty dogs rescued from an Ohio puppy mill
            surrender. Join these adorable pups on their adventures as they embark on a new chapter filled with
            love, hope, and the joys of finding their forever homes. </p>
         <div className="card">
           <img className='card__image' src={Nessie} alt="Avatar" style={{width: '100%'}} />
         </div>
          <div className="container">
              <h4><b>Nessie</b></h4>
              <p>Mama</p>
           </div>
          <div className="card">
            <img className='card__image' src={Wendi} alt="Avatar" style={{width: '100%'}}/>
            <div className="container">
              <h4><b>Wendigo</b></h4>
              <p>Little girl with a big job</p>
            </div>
          </div>
          <div className="card">
            <img className='card__image' src={Rou} alt="Avatar" style={{width: '100%'}}/>
            <div className="container">
              <h4><b>Rou</b></h4>
              <p>Theatre dog with service tasks, overall over-achiever</p>
            </div>
          </div>
          <div className="card relative">
            <img className='card__image' src={Yeti} alt="Avatar" style={{width: '100%'}}/>
            <div className="overlay">
                <div className="text">Big Brother, has fun, protects</div>
              </div>
             <div className="container">
              <h4><b>Yeti</b></h4>
              <p>Big Brother, has fun, protects.</p>
            </div> 
          </div>
          <div className="card">
            <img className='card__image' src={Kraken} alt="Avatar" style={{width: '100%'}}/>
            <div className="container">
              <h4><b>Kraken</b></h4>
              <p>Little drama prince with a heart of gold</p>
            </div>
          </div>
          <div className="card">
            <img className='card__image' src={Sassy} alt="Avatar" style={{width: '100%'}}/>
            <div className="container">
              <h4><b>Sassy</b></h4>
              <p>Protector, watch out for that Sassy slap!</p>
            </div>
          </div>
          <div className="card">
            <img className='card__image' src={Lyca} alt="Avatar" style={{width: '100%'}}/>
            <div className="container">
              <h4><b>Lycan</b></h4>
              <p>Mama's little girl, she's got your back.</p>
            </div>
          </div>
    </section >
    
    )
}

export default Meet;