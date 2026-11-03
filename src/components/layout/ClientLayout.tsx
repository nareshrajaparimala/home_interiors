"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ContactModal from "./ContactModal";

const ModalContext = createContext<() => void>(() => {});
export const useModal = () => useContext(ModalContext);

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  return (
    <ModalContext.Provider value={openModal}>
      <Navbar onOpenModal={openModal} />
      {/* Spacer for fixed navbar */}
      <div className="h-[70px]" />
      {children}
      <Footer />
      <FloatingActions onOpenModal={openModal} />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </ModalContext.Provider>
  );
}
