import PlayerBankCard from "./PlayerBankCard"
import { Draggable } from "react-beautiful-dnd"

const PlayerBank = ({ freeAgents }: any) => {
  return (
    <div className="p-5 mb-5">
      <h2 className="text-2xl font-bold mb-4 text-center px-24 text-gray-900 dark:text-gray-200 tracking-wide uppercase underline decoration-primary font-Industry">Player Bank</h2>
      <div className="grid lg:grid-cols-10 grid-cols-2 gap-2 p-1 w-[80vw] h-[30vh] bg-accent-light m-auto overflow-auto">
      {freeAgents.map((freeAgent: any, index: number) => 
            <PlayerBankCard freeAgents={freeAgent} key={freeAgent._id} />
    )}
      </div>
    </div>
  )
}

export default PlayerBank