import { useRef } from "react"
import { useSong } from "../shared/hooks/useSong"
import { Menu } from "./Menu"
import { MusicLibrary } from "./MusicLibrary"
import { StyledPlayer } from "./Player.style"
import { Slider } from "./Slider"
import { Song } from "./Song"

const Player = () => {
  const { song } = useSong()
  const ref = useRef()
  return (
    <StyledPlayer>
      <MusicLibrary />
      <Song />
      <Slider />
      <Menu />
      <audio src={"../assets/music/Waybackwhen.mp3"} ref={ref} />
    </StyledPlayer>
  )
}

export default Player
