"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ContactModal from "./ContactModal";
import OfferTicker from "./OfferTicker";

const ModalContext = createContext<() => void>(() => {});
export const useModal = () => useContext(ModalContext);

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <ModalContext.Provider value={openModal}>
      <Navbar onOpenModal={openModal} />
      {!isHome && <OfferTicker />}
      {/* On homepage, add spacing for fixed navbar since no ticker */}
      {isHome && <div className="h-[70px]" />}
      {children}
      <Footer />
      <FloatingActions onOpenModal={openModal} />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </ModalContext.Provider>
  );
}
