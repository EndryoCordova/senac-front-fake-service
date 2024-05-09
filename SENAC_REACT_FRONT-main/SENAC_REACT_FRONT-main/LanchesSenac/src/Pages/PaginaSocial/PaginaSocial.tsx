import "./PaginaSocial.css";
import Social from "../../components/Social/Social"

const PaginaSocial = () => {
  return (
    <>
    <div className="social_content">
    <Social.social1
              image="https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil-melhores.jpg"
              cardTitle="Teste"/>
               <Social.social2
              image="https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil-melhores.jpg"
              cardTitle="Teste"/>
              

              
      <div className="PaginaSocial">
        <h1>Página Social</h1>
      </div>

      </div>
    </>
  );
};

export default PaginaSocial;
