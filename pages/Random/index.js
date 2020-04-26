import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './random.css';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'


const Random = () => {

        useEffect(()=>{
            setTimeout(()=>{
                        document.querySelector("#random").style.left = 0;
            }, 50);
        }, []);
    
    return<div id="random">
    <Header text="About Me!" fontSize={24} />
    <div className="pic"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
    <div className="paras">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu sagittis erat. Nulla sed varius enim. Phasellus dignissim felis at erat molestie sollicitudin. Fusce ex odio, dictum in venenatis ac, malesuada vel sem. In condimentum consequat neque ac venenatis. Aliquam ornare ipsum magna, consectetur bibendum arcu fermentum ac. Proin suscipit, metus non finibus congue, nulla sem consectetur quam, at ultricies urna nisi ac odio. Vestibulum porttitor tortor eget lorem tristique, ac lobortis nisi vehicula. Sed augue risus, pulvinar a bibendum non, imperdiet vel velit. In nec dapibus mi, scelerisque dapibus leo. Vivamus at volutpat felis. Fusce pellentesque porttitor nisi quis bibendum. Integer non dolor ullamcorper, dapibus neque eget, varius turpis.<br/>
    <br></br>
    Aenean sit amet scelerisque sem, vitae consequat nisl. Vivamus ipsum eros, maximus in maximus id, ultrices luctus odio. Curabitur sem justo, pulvinar eu malesuada quis, egestas sit amet ex. Cras odio sapien, gravida quis sapien vel, ultrices scelerisque velit. Aenean sit amet eleifend orci. Integer porttitor ultricies quam id egestas. Vestibulum eget dictum neque. Sed eu lorem sollicitudin, auctor mi non, vehicula diam. Cras maximus non quam sit amet tincidunt. Donec urna elit, aliquam eu sodales nec, tristique nec nisl. Aliquam erat volutpat. Cras suscipit tortor vitae nisl sagittis tempus. Praesent eget velit eget elit mattis viverra in quis enim. Morbi sollicitudin congue elementum. Mauris viverra leo quis augue placerat mollis. Cras dapibus magna quis nunc tempor, sit amet ultrices augue mollis.<br/>
    <br></br>
    Nam et consectetur mi. Ut eleifend, arcu eget eleifend faucibus, odio ipsum tempus libero, vitae commodo orci dui et velit. Aliquam iaculis id augue non imperdiet. Cras vel odio et nisi congue iaculis vel quis velit. Cras sodales ipsum nec neque rutrum tincidunt. In hac habitasse platea dictumst. Duis sit amet ante mattis nisi laoreet luctus nec a magna. Nam venenatis mollis lorem vel faucibus. Integer efficitur lacinia elit quis facilisis. Nullam ac sapien venenatis, iaculis dui non, convallis dui.</div>
    <div className="cd"><CustomButton text="follow me on Insagram!"/></div>
    <div className="insta"><AiOutlineInstagram size={35}/>@fabdabkittycat</div>
    <div className="insta"><FaTwitterSquare size={30}/>@fabdabkittykat</div>
    <div className="insta"><FaYoutubeSquare size={30}/>@fabdabkittykat</div>

</div>
}

export default Random;