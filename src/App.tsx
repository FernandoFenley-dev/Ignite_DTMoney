import Dashboard from "./components/Dashboard";
import { useCallback, useState } from "react";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";

// configuração de acessibilidade para o componente Modal, colocando o modal como
// elemento irmão da tag com id="root" no HTML da página
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}

