import PlayerPortrait from "../lft/PlayerPortrait"

type Props = {
  freeAgents: {
    image: string
    username: string
  }
}

const PlayerBankCard = ({ freeAgents }: Props) => {
  return (
    <div className="bg-[#2c2c2c]">
      <div className="m-4">
      <PlayerPortrait value={freeAgents.image} />
      </div>
      <p className="text-center">{freeAgents.username}</p>
    </div>
  )
}

export default PlayerBankCard