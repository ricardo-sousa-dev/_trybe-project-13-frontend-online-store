import React from 'react';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout">
        <Link to="/cart">
          <i className="fas fa-undo" />
        </Link>
        <div className="reviewProducts">
          <h3>Revise seus Produtos</h3>
        </div>
        <div className="infoBuyer">
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
          <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
          <input type="text" placeholder="Email" data-testid="checkout-email" />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
          <input type="text" placeholder="CEP" data-testid="checkout-cep" />
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select name="estado">
            <option value="estado" selected>
              Estado
            </option>
            <option value="ac">Acre</option>
            <option value="al">Alagoas</option>
            <option value="am">Amazonas</option>
            <option value="ap">Amapá</option>
            <option value="ba">Bahia</option>
            <option value="ce">Ceará</option>
            <option value="df">Distrito Federal</option>
            <option value="es">Espírito Santo</option>
            <option value="go">Goiás</option>
            <option value="ma">Maranhão</option>
            <option value="mt">Mato Grosso</option>
            <option value="ms">Mato Grosso do Sul</option>
            <option value="mg">Minas Gerais</option>
            <option value="pa">Pará</option>
            <option value="pb">Paraíba</option>
            <option value="pr">Paraná</option>
            <option value="pe">Pernambuco</option>
            <option value="pi">Piauí</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="rn">Rio Grande do Norte</option>
            <option value="ro">Rondônia</option>
            <option value="rs">Rio Grande do Sul</option>
            <option value="rr">Roraima</option>
            <option value="sc">Santa Catarina</option>
            <option value="se">Sergipe</option>
            <option value="sp">São Paulo</option>
            <option value="to">Tocantins</option>
          </select>
        </div>
        <div className="paymentMethod">
          <h3>Método de Pagamento</h3>
          <div className="ticket">
            <h4>Boleto</h4>
            <input type="radio" name="ticket" value="ticket" />
            <i className="fas fa-money-check-alt" />
          </div>
          <div className="creditCard">
            <label htmlFor="visa">
              <input type="radio" name="creditCard" value="creditCard" />
              Visa
              <i className="fas fa-credit-card" />
            </label>
            <label htmlFor="mastercard">
              <input type="radio" name="creditCard" value="creditCard" />
              Mastercard
              <i className="fas fa-credit-card" />
            </label>
            <label htmlFor="elo">
              <input type="radio" name="creditCard" value="creditCard" />
              Elo
              <i className="fas fa-credit-card" />
            </label>
          </div>
        </div>
        <button type="submit" className="pay">
          Comprar
        </button>
      </div>
    );
  }
}

export default Checkout;
