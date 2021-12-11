import React, { useContext } from 'react';
import { Container } from './styles';

import incomeImage from '../../assets/income.svg';
import expenseImage from '../../assets/expense.svg';
import totalImage from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

const Summary: React.FC = () => {

  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expenseImage} alt="Saídas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}

export default Summary;