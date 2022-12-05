import { DragDropContext } from "@hello-pangea/dnd";
import TableRow from "./TableRows";

function CreateRosterContainer(props) {
  const { appState, setAppState } = props;

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = appState.newDraft.rows[source.droppableId];
    const finish = appState.newDraft.rows[destination.droppableId];
    if (start !== finish) {
      const newItemSourceIds = Array.from(start.itemIds);
      newItemSourceIds.splice(source.index, 1);
      const newItemDestinationIds = Array.from(finish.itemIds);
      newItemDestinationIds.splice(destination.index, 0, draggableId);

      const newStartRow = {
        ...start,
        itemIds: newItemSourceIds,
      };

      const newFinishRow = {
        ...finish,
        itemIds: newItemDestinationIds,
      };

      const newState = {
        ...appState,
        newDraft: {
          ...appState.newDraft,
          rows: {
            ...appState.newDraft.rows,
            [newStartRow.id]: newStartRow,
            [newFinishRow.id]: newFinishRow,
          },
        },
      };
      setAppState(newState);
      return;
    } else if (start === finish) {
      const newItemIds = Array.from(start.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newRow = {
        ...start,
        itemIds: newItemIds,
      };

      const newState = {
        ...appState,
        newDraft: {
          ...appState.newDraft,
          rows: {
            ...appState.newDraft.rows,
            [newRow.id]: newRow,
          },
        },
      };
      setAppState(newState);
      return;
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="p-5 mb-5" id="create-roster-builder-container">
          {appState.newDraft.rowOrder?.map((row) => {
            return (
              <TableRow
                key={appState.newDraft.rows[row].title}
                row={row}
                letter={appState.newDraft.rows[row].title}
                color={appState.newDraft.rows[row].color}
                items={appState.newDraft.rows[row].itemIds}
                itemMap={appState.newDraft.items}
              />
            );
          })}
        </div>
        <h2 className="text-2xl font-bold my-4 text-center px-24 text-gray-900 dark:text-gray-200 tracking-wide uppercase underline decoration-primary font-Industry">Player Bank</h2>
        <TableRow
          className="grid lg:grid-cols-10 grid-cols-2 gap-2 p-1 w-[80vw] h-[30vh] m-auto overflow-auto"
          key={"row-tray"}
          row={"row-tray"}
          items={appState.newDraft.rows["row-tray"].itemIds}
          itemMap={appState.newDraft.items}
        />
      </DragDropContext>
    </>
  );
}

export default CreateRosterContainer;
