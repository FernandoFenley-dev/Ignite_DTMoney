import React from 'react';
import Summary from '../Summary';
import { TransactionTables } from '../TransactionTables';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Summary />
            <TransactionTables />
        </Container>
    );
}

export default Dashboard;