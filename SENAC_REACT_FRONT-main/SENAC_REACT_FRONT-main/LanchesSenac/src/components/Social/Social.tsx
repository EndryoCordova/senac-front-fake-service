import './Social.css';
import { SocialProps } from "../../interfaces/SocialProps";
import { fetchDadosSocial1 } from '../../services/DadosSocial';
import { fetchDadosSocial2 } from '../../services/DadosSocial';
import { useEffect, useState } from 'react';
import { Sociais } from '../../interfaces/Sociais';



const Social1: React.FC<SocialProps> = () => {
    const [image, setUrlImage] = useState<any | null>(null);
    const [cardTitle, setTitle] = useState<any | null>(null);
    //const [error, setError] = useState<string | null>(null);
      
    const socialData: SocialProps = fetchDadosSocial1();
    
    return (
        <>            
            <div  className="card card-extra-styles">
                <img src={socialData.image} className="product-card__image" alt={socialData.image} />
                
            </div>
        </>
    );
};

const Social2: React.FC<SocialProps> = () => {
    const [image, setUrlImage] = useState<any | null>(null);
    const [cardTitle, setTitle] = useState<any | null>(null);
    //const [error, setError] = useState<string | null>(null);
      
    const socialData: SocialProps = fetchDadosSocial2();
    
    return (
        <>            
            <div  className="card card-extra-styles">
                <img src={socialData.image} className="product-card__image" alt={socialData.image} />
                
            </div>
        </>
    );
};

const objSociais: Sociais = {
    social1: Social1,
    social2: Social2
}


export default objSociais;
