import React, { useState } from "react";
import { Button, Modal } from "antd";
function ModalComponent({ title, buttonTitle, isModalOpen, setIsModalOpen }) {
    const [hideCancel,setHideCancel]= useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
            >
                <p>{title}</p>
            </Modal>
        </>
    );
}

export default ModalComponent;
