
import React, { useEffect, useRef, useState} from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import '../../styles/Media.scss'
function Media() {
    const mediaRef = useRef(null);
    const[visible, setNewsletterDialogVisibility] = useState(false);
const [email, setEmail] = useState('');
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
    <Dialog header="Thank you For Joining our Mailing List" visible={visible} style={{ width: '50vw' }} onHide={() => setNewsletterDialogVisibility(false)}>
    <p className="m-0">
      Of course it hasn't really happened. Little bits at a time man..  </p>
</Dialog>
    <h3 className='mailingList__title'>Sign up for the Mailing List</h3>

    <form onSubmit={(e) => {
  e.preventDefault();
  setNewsletterDialogVisibility(true);
}}>
  <FloatLabel>
    <InputText className='form__input'id="email" value={email} onChange={(e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    }} />
    <label htmlFor="email">Email: </label>
  </FloatLabel>
  <Button label="Submit" color='#996633' />
</form>

                <ul>
                    <li><a href="https://www.instagram.com/thecryptidlitter/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/thecryptidlitter/">Facebook</a></li>
                    <li><a href="https://www.twitter.com/thecryptidlitter/">Twitter</a></li>
                </ul>
                </section >    );
}

export default Media;