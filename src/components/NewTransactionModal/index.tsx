import React, { FormEvent, useCallback, useState } from 'react';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';

import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {

    const [type, setType] = useState('deposit');

    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<number>(0);
    const [category, setCategory] = useState<string>('');

    const handleCreateNewTransaction = useCallback((event: FormEvent) => {
        event.preventDefault();
        const data = {
            title,
            value,
            category,
            type,
        };
        api.post('/transactions', data);
    }, []);

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={expenseImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    );
}

export default NewTransactionModal;
