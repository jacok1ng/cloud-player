import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { selectPlaying } from "../../features/song/songSlice"
import { useAppSelector } from "../../store/hooks"
import { StyledMenu } from "./Menu.style"
import { usePlayerMenu } from "./Menu.utils"

const Menu = () => {
  const { nextSong, previousSong, playAndPause } = usePlayerMenu()
  const isPlaying = useAppSelector(selectPlaying)
  return (
    <StyledMenu>
      <FontAwesomeIcon icon={faBackward} onClick={previousSong} />
      <FontAwesomeIcon
        icon={isPlaying === false ? faPlay : faPause}
        onClick={playAndPause}
      />
      <FontAwesomeIcon icon={faForward} onClick={nextSong} />
    </StyledMenu>
  )
}

export default Menu
