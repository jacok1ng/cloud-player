import { Menu } from "./Menu"
import { MusicLibrary } from "./MusicLibrary"
import { StyledPlayer } from "./Player.style"
import { Song } from "./Song"

const Player = () => {
  return (
    <StyledPlayer>
      <MusicLibrary />
      <Song />
      <Menu />
    </StyledPlayer>
  )
}

export default Player
