import React from 'react'
import { useDrag, useDrop } from 'react-dnd';

function Pictures({ image, onDrop }) {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'image',
      item: { id: image.id, url: image.url },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  
    const [, drop] = useDrop({
      accept: 'image',
      drop: (droppedImage) => onDrop(droppedImage),
    });
  
    return (
      <div
        ref={(node) => drag(drop(node))}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'grab',
        }}
      >
        <img  src={image.url} alt={`Image ${image.id}`} />
      </div>
    );
  }

export default Pictures;