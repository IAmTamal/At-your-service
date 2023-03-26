import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
    isAuthmodalOpen: boolean,
    toggleAuthModal: () => void,
    authstate: string,
    toggleAuthstate: (arg0: string) => void
}

export const useBearStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                isAuthmodalOpen: false,
                toggleAuthModal: () => set((state) => ({ isAuthmodalOpen: !state.isAuthmodalOpen })),
                authstate: "login",
                /* toggleAuthstate should take in a string input  */

                toggleAuthstate: (info) => set((state) => ({ authstate: info }))
            }),
            {
                name: 'bear-storage',
            }
        )
    )
)