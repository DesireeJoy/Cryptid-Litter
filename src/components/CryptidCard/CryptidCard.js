import '../../styles/CryptidCard.scss'

import {  Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CryptidCard = ({title, subTitle, image, imageAlt, text,buttonOneTitle, buttonTwoTitle}) => {

    const header = (
        <img alt={imageAlt} src={image} />
    );
    const footer = (
        <span>
            <Button label={buttonOneTitle} icon="pi pi-check" />
            <Button label={buttonTwoTitle} icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    return (
        <div>
        <Card title={title}  subTitle={subTitle} footer={footer} header={header}  style={{ width: '25em' }}>
<p className="m-0" style={{lineHeight: '1.5'}}>{text}</p>

</Card>
        </div>
    )
}
export default CryptidCard;