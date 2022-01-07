import { songs } from "../../assets/songs"
import { selectSong } from "../../features/song/songSlice"
import { useAppSelector } from "../../store/hooks"
import { ImageHolder, StyledSong } from "./Song.style"

const Song = () => {
  const song = useAppSelector(selectSong)
  return (
    <StyledSong>
      <ImageHolder src={songs[0].image} />
      <h3>Soulsounds</h3>
      <p>Parkbench Epiphany</p>
    </StyledSong>
  )
}

export default Song
