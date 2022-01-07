import { useState } from "react"
import { songs } from "../../assets/songs"
import {
  changePlay,
  changeSong,
  selectPlaying,
  selectSong,
} from "../../features/song/songSlice"
import { useSong } from "../../shared/hooks/useSong"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

const path = "../../music"

const useNextSong = () => {
  return () => {
    console.log("Next song")
  }
}

const usePreviousSong = () => {
  return () => console.log("Previous song")
}

const usePlayAndPause = () => {
  const dispatch = useAppDispatch()
  const isPlaying = useAppSelector(selectPlaying)
  const { song } = useSong()
  return () => {
    console.log(isPlaying)
    if (isPlaying) {
      song.pause()
    } else {
      song.play()
    }
    dispatch(changePlay(!isPlaying))
  }
}

export const usePlayerMenu = () => {
  const nextSong = useNextSong()
  const previousSong = usePreviousSong()
  const playAndPause = usePlayAndPause()
  return { nextSong, previousSong, playAndPause }
}
