import React from "react";
function useModal() {
    const [isModalActive, setIsModalActive] = React.useState(false)
    function handleModal() {
        setIsModalActive(!isModalActive);
    }
    function closeModal() {
    setIsModalActive(false);
    }
    return {isModalActive, handleModal, closeModal}
}
export { useModal }