import { Menu } from "./Menu"
import { StyledPlayer } from "./Player.style"
import { Song } from "./Song"

const Player = () => {
  return (
    <StyledPlayer>
      <Song />
      <Menu />
    </StyledPlayer>
  )
}

export default Player
