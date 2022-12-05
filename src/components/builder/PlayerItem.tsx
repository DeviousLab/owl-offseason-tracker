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
