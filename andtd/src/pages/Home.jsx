import { ContainerHome } from './Home.styled';
import ModalComponent from '../components/Modal';
import { useState } from 'react';

const items = [
    {
        key: "1",
        label: (
            <a>
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a>
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a>
                3rd menu item
            </a>
        ),
    },
];
function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
    <ContainerHome>
        <ModalComponent
        title="Modal thứ nhất"
        buttonTitle="button thứ nhất"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
    />
    <hr />
    <button onClick={() => setIsModalOpen(true)}>hello</button>
    </ContainerHome>
    );
}

export default Home;