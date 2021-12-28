import { ImageHolder, StyledSong } from "./Song.style"

const Song = () => {
  return (
    <StyledSong>
      <ImageHolder src={require("../../assets/image-player.jpg")} />
      <h3>Soulsounds</h3>
      <p>Parkbench Epiphany</p>
    </StyledSong>
  )
}

export default Song
