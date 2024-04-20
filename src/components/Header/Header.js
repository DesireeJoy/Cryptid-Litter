
import '../../styles/Header.scss';
import heroImage from '../../images/HeroCryptids.png'
function Header() {
    return (
<header class="hero">
<img src={heroImage} alt="Nessie and her 6 Aussie Labradoodle puppies in closeup" />
<div class="hero__title-box"> 
    <h1 class="hero__title">
        The Cryptid Litter
    </h1>
 </div>
</header>    );
}

export default Header;