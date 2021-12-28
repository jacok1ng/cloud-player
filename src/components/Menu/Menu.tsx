import {
  faBackward,
  faForward,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledMenu } from "./Menu.style"

const Menu = () => {
  return (
    <StyledMenu>
      <FontAwesomeIcon icon={faBackward} />
      <FontAwesomeIcon icon={faPlay} />
      <FontAwesomeIcon icon={faForward} />
    </StyledMenu>
  )
}

export default Menu
