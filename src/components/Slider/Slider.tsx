import { useEffect, useMemo, useState } from "react"
import { songs } from "../../assets/songs"
import {
  changeCurrentTime,
  changeSong,
  selectCurrentTime,
  selectSong,
} from "../../features/song/songSlice"
import { useSong } from "../../shared/hooks/useSong"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StyledSlider } from "./Slider.style"

const Slider = () => {
  const dispatch = useAppDispatch()
  const { song } = useSong()
  const newSong = useMemo(() => {
    return songs[0].src
  }, [song])

  useEffect(() => {
    console.log("ct", newSong.currentTime)
  }, [newSong.currentTime])

  return (
    <StyledSlider
      type="range"
      min={0}
      max={song.duration ?? 100}
      value={song.currentTime}
      onChange={(e) => {
        dispatch(changeCurrentTime(parseInt(e.target.value)))
      }}
    />
  )
}

export default Slider
