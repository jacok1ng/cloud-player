interface SongProps {
  src: HTMLAudioElement
  artist: string
  title: string
  image: string
  color: string[]
  active: boolean
}

export const songs: SongProps[] = [
  {
    src: new Audio(require("./music/Waybackwhen.mp3")),
    artist: "Parkbench Epiphany",
    title: "Waybackwhen",
    image: "https://i.scdn.co/image/ab67616d0000b2730f571abe472289e236d83de5",
    color: ["#1E2D39", "#E38E92"],
    active: true,
  },
  {
    src: new Audio(require("./music/Dawn.mp3")),
    artist: "Hanz",
    title: "Dawn",
    image: "https://i.scdn.co/image/ab67616d0000b2733b77898252400f064b789102",
    color: ["##B3CED9", "##E57A69"],
    active: false,
  },
  {
    src: new Audio(require("./music/Warmth.mp3")),
    artist: "chromonicci",
    title: "Warmth.",
    image: "https://i.scdn.co/image/ab67616d0000b27382d86cde91ad9e5919c04327",
    color: ["##D54948", "##882C41"],
    active: false,
  },
]
