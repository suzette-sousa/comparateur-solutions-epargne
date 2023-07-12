import { useState, useContext, useRef, useEffect } from 'react';
import './ContactModal.scss';

const ContactModal = ({ show, handleClose, productName }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const modalRef = useRef();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') {
      setError('Veuillez saisir un message.');
      return;
    }
    setMessage('');
    setError('');
    handleClose();
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setError('');
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`modal ${show ? 'modal--show' : ''}`}>
      <div ref={modalRef} className="modal__content">
        <div className="modal__header">
          <h3>
            Contactez-nous pour plus d'informations sur le produit {productName}
          </h3>
          <button className="modal__close-btn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="modal__body">
          <textarea
            className="modal__message"
            rows={3}
            value={message}
            onChange={handleMessageChange}
            placeholder="Entrez votre message ici..."
          ></textarea>
          {error && <p className="modal__error">{error}</p>}
        </div>
        <div className="modal__footer">
          <button
            className="modal__btn modal__btn--cancel"
            onClick={handleClose}
          >
            Annuler
          </button>
          <button
            className="modal__btn modal__btn--send"
            onClick={handleSendMessage}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
