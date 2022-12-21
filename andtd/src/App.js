import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const TEST_DRAG_DROP = [
  {
    id: "0",
    content: "item 1",
  },
  {
    id: "1",
    content: "item 2",
  },
  {
    id: "2",
    content: "item 3",
  },
  {
    id: "3",
    content: "item 4",
  },
  {
    id: "4",
    content: "item 5",
  },
];
const array_move = (arr, old_index, new_index) => {
  const result = Array.from(arr);
  const [removed] = result.splice(old_index, 1);
  // console.log("remove", removed[0]);
  result.splice(new_index, 0, removed);
  return result;
};
function App() {
  const [stateData, setStateData] = useState(TEST_DRAG_DROP);

  
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const index = result.source.index;
    const newIndex = result.destination.index;
    const newArray = array_move(stateData, index, newIndex);
    setStateData(newArray)
  };
  const grid = 8
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
  });
  return (
    <div className="App">
      <Home/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {stateData.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
