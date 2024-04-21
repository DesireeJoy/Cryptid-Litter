import '../../styles/RoundedParagraph.scss';
function RoundedParagraph({title, text}) {
    return (

    <div className="paragraph">
        <h3 className='paragraph__title'>{title}</h3>
   <p className='paragraph__text'>{text}</p>


    </div>
 );
}

export default RoundedParagraph;