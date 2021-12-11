import React from 'react';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';

import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';

import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay" // propriedade do comp. Modal para estilizar o que está fora do modal
            className="react-modal-content" // propriedade do comp. Modal para estilizar o conteúdo do Modal
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="titulo" />
                <input type="number" placeholder="valor" />

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type='button'>
                        <img src={expenseImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    );
}

export default NewTransactionModal;
