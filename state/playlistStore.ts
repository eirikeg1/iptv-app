import { create } from 'zustand'

interface PlayListState {
    name: String,
    url: String,
}

const usePlayListStore = create<PlayListState>((get) => ({
    name: "playlist",
    url: "127.0.0.1:3000",

}))
