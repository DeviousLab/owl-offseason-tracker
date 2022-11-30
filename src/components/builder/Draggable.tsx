
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props: any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    padding: '1rem',
    border: '1px solid #ccc',
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
