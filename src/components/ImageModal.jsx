/* eslint-disable react/prop-types */
import Modal from "react-modal";
import "../assets/Css/ImageModal.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <img src="./img/inicioClases.png" alt="Inicio clases 1 de marzo" />
            <button className="btn btn-sm btn-danger" onClick={onClose}>
                X
            </button>
        </Modal>
    );
};

export default ImageModal;

("/img/Anuncio.png");
