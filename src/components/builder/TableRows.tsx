import RowHeading from "./RowHeading";
import { Droppable } from "@hello-pangea/dnd";
import PlayerItem from "./PlayerItem";

function TableRow(props) {
  const { letter, items, itemMap, row } = props;

  return (
    <div className="flex p-3">
      {letter && <RowHeading letter={letter} />}
      <Droppable droppableId={row} direction="horizontal">
        {(provided, snapshot) => (
          <div
            className={row === "row-tray" ? "grid grid-cols-3 lg:grid-cols-10 2xl:grid-cols-12 gap-2 m-auto min-w-[85%] bg-gray-400 dark:bg-accent-light p-2 rounded-md h-64 overflow-auto" : "flex flex-wrap bg-gray-400 dark:bg-accent-light w-full h-32 m-auto"}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => {
              return (
                <PlayerItem
                  item={item}
                  itemMap={itemMap}
                  index={index}
                  key={index}
                />
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TableRow;
