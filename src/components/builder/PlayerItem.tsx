import { Draggable } from '@hello-pangea/dnd';

import PlayerBankCard from './PlayerBankCard';

function PlayerItem(props) {
	const { item, itemMap, index } = props;
	return (
		<Draggable
			draggableId={itemMap[item].id}
			key={itemMap[item].id}
			index={index}
		>
			{(provided) => (
				<div
					className="flex flex-col items-center justify-center mx-1"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{itemMap[item].image ? (
						<PlayerBankCard player={itemMap[item]} />
					) : (
						itemMap[item].username
					)}
				</div>
			)}
		</Draggable>
	);
}
export default PlayerItem;
