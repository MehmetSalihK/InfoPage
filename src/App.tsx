// App.tsx

import React, { useState } from "react";
import Modal from "react-modal";
import "./styles/App.css"; // Importation de votre fichier CSS

import InstagramFeed from "./components/InstagramFeed";

// Assurez-vous que le portail modal est attaché à un élément racine de l'application React
Modal.setAppElement("#root");

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const platformLinks: { [key: string]: string } = {
    Instagram: "https://www.instagram.com/sketur60/media/", // Lien pour Instagram
    YouTube: "https://www.youtube.com/@parisdekibebeg480",
    Kick: "https://player.kick.com/parisdekibebeg?autoplay=true", // Lien pour la plateforme Kick
    Twitch: "https://player.twitch.tv/?channel=unlostv&lang=en&muted=false&parent=www.mehmetsalihk.com",
    Paypal: "", // Ajoutez le lien Paypal ici
  };

  const openModal = (platform: string) => {
    setSelectedPlatform(platform);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPlatform("");
    setModalIsOpen(false);
  };

  return (
    <div className="black-page">
      <div className="social-buttons">
        <button className="instagram-button" onClick={() => openModal("Instagram")}>
          <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
        </button>
        <button className="youtube-button" onClick={() => openModal("YouTube")}>
          <i className="fab fa-youtube" style={{ fontSize: "24px" }}></i>
        </button>
        <button className="kick-button" onClick={() => openModal("Kick")}>
          <img src="https://downloads.intercomcdn.com/i/o/392376/726bfa27d2180b351b122551/957267843d48c6dddedd3e225bf709cb.png" alt="Kick" style={{ width: "24px", height: "24px" }} />
        </button>
        <button className="twitch-button" onClick={() => openModal("Twitch")}>
          <i className="fab fa-twitch" style={{ fontSize: "24px" }}></i>
        </button>
        <button className="paypal-button" onClick={() => openModal("Paypal")}>
          <i className="fab fa-paypal" style={{ fontSize: "24px" }}></i>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2>Page {selectedPlatform}</h2>
          {selectedPlatform === "Instagram" && <InstagramFeed />} {/* Affiche InstagramFeed seulement si le bouton Instagram est cliqué */}
          {platformLinks[selectedPlatform] && selectedPlatform !== "Instagram" && (
            <iframe
              title={selectedPlatform}
              src={platformLinks[selectedPlatform]}
              frameBorder="0"
              style={{ width: "960px", height: "540px" }} // Hauteur et largeur spécifiées
            ></iframe>
          )}
          <button onClick={closeModal} className="close-button">
            <i className="fas fa-times"></i> {/* Icône X */}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
