import RowHeading from "./RowHeading";
import { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import TestItem from "./PlayerItem";

function TableRow(props) {
  const { letter, items, itemMap, row } = props;

  return (
    <div className="">
      {letter && <RowHeading letter={letter} />}
      <Droppable droppableId={row} direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="grid grid-cols-10 gap-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => {
              return (
                <TestItem
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
