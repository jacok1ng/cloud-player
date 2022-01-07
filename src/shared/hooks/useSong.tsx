import { useEffect, useState } from "react"
import { selectSong } from "../../features/song/songSlice"
import { useAppSelector } from "../../store/hooks"

export const useSong = () => {
  const music = useAppSelector(selectSong)
  const [song, setSong] = useState(music)

  useEffect(() => {
    setSong(music)
  }, [music])

  return { song }
}
