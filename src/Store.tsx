import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


type userProfileobject = {
    userName: string;
    slug: string;
    profilepic: string;
};

interface BearState {
    isAuthmodalOpen: boolean,
    toggleAuthModal: () => void,
    authstate: string,
    toggleAuthstate: (arg0: string) => void,
    userprofile: userProfileobject;
    setuserProfile: (arg0: userProfileobject) => void,
}

export const useBearStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                isAuthmodalOpen: false,
                toggleAuthModal: () => set((state) => ({ isAuthmodalOpen: !state.isAuthmodalOpen })),
                authstate: "login",
                toggleAuthstate: (info) => set((state) => ({ authstate: info })),
                userprofile: { userName: "", slug: "", profilepic: "" },
                setuserProfile: (info) => set((state) => ({ userprofile: info })),

            }),
            {
                name: 'bear-storage',
            }
        )
    )
)