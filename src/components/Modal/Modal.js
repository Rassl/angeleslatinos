import { navigate } from 'gatsby';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../Button/Button';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background:  `radial-gradient(
            at bottom left,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
        )`,
    },
};

const Wrapper = styled.div`
    position: relative;
    z-index: 99999999;
    iframe {
        width: 100%;
        height: 300px;
    }

    .form {
        display: none;
    }
`;

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby');

function MolalComponent({ open }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Wrapper>
            <Modal
                isOpen={open}
                onRequestClose={() => navigate(-1)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf0xEILZlQ36CjFpV8zt9GHGTFIgO8YO3i-rY7uVAvqF2eLtA/viewform?embedded=true" frameborder="0" style={{width: '100%', height: '600px'}} marginheight="0" marginwidth="0">Загрузка…</iframe>
                <Button onClick={() => navigate(-1)} text="Готово" />
            </Modal>
        </Wrapper>
    );
}

export default MolalComponent;
