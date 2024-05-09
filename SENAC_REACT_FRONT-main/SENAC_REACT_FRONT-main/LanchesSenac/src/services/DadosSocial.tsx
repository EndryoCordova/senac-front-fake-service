import axios from "axios";
import { SocialProps } from "../interfaces/SocialProps";

const apiClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const fetchDadosSocial1 = () => {
    const objReturn: SocialProps = {
        image: "https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil-melhores.jpg",
        cardTitle: "Teste"
    };
    return objReturn;
};

export const fetchDadosSocial2 = () => {
    const objReturn: SocialProps = {
        image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/26/234426928-lanches-veganosedicase.jpg",
        cardTitle: "Teste"
    };
    return objReturn;
};
