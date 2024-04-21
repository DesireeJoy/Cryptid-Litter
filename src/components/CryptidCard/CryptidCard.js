import '../../styles/CryptidCard.scss'
import React, { useEffect, useRef, useState } from 'react';
import {  Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { IconPawFilled } from '@tabler/icons-react';
import {IconBone} from '@tabler/icons-react';
import {IconDog}    from '@tabler/icons-react';
const CryptidCard = ({title, subTitle, image, imageAlt, text,buttonOneTitle, buttonTwoTitle, before, after}) => {

    const [content, setContent] = useState(before);
    const buttonIcon1 = <div className='iconBone'><IconBone/></div>
    const buttonIcon2 = <div className='iconDog'><IconDog/></div>

    const header = (
        <img alt={imageAlt} src={image} />
     );
    const footer = (
        <span>
            <Button label={buttonOneTitle} icon={buttonIcon1} onClick={()=> setContent(before)} />
            <Button label={buttonTwoTitle} icon={buttonIcon2} className="p-button-secondary ml-2"  onClick={()=> setContent(after)} />
        </span>
    );
    const newTitle = (
        <><IconPawFilled  color="#996633" size={24}/> {title}<IconPawFilled  color="#996633" size={24}/>
        </>
    )
    return (
        <div> 
        <Card title={newTitle}  subTitle={subTitle} footer={footer} header={header}  style={{ width: '25em' }}>
<p className="m-0" style={{lineHeight: '1.5'}}>{content}</p>

</Card>
        </div>
    )
}
export default CryptidCard;