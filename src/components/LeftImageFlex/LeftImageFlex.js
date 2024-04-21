import '../../styles/LeftImageFlex.scss';
function LeftImageFlex({image, text}) {
    return (

    <div className="rounddedDiv">
        <div className='rounddedDiv__image'>{image}</div>
   <p className='rounddedDiv__text'>{text}</p>


    </div>
 );
}

export default LeftImageFlex;