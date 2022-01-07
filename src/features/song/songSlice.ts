import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { songs } from "../../assets/songs"
import { RootState } from "../../store"

interface SongState {
  isPlaying: boolean
  song: HTMLAudioElement
}

const initialState: SongState = {
  isPlaying: false,
  song: songs[0].src,
}

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    changePlay: (state, { payload }: PayloadAction<boolean>) => {
      state.isPlaying = payload
    },
    changeSong: (state, { payload }) => {
      state.song = payload
    },
    changeCurrentTime: (state, { payload }) => {
      state.song.currentTime = payload
    },
  },
})

export const { changePlay, changeSong, changeCurrentTime } = songSlice.actions

export const selectPlaying = (state: RootState) => state.songReducer.isPlaying
export const selectSong = (state: RootState) => state.songReducer.song
export const selectCurrentTime = (state: RootState) =>
  state.songReducer.song.currentTime

export default songSlice.reducer
