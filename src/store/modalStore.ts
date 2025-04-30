import {create} from 'zustand';

interface ModalState {
    isOpen: boolean;
    videoSrc: string;
    openModal: (src: string) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    videoSrc: "",
    openModal: (src) => set({isOpen: true, videoSrc: src}),
    closeModal: () => set({isOpen: false, videoSrc: ""})
}))