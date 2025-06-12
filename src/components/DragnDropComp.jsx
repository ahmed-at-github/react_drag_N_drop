import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export default function DragnDropComp() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div>
          <div>
            <h2>Drag & drop Board</h2>
            <from>
              <input type="text" placeholder="Name" value={0} onChange={0} />
              <select value={0} onChange={0}>{/* array mapping*/}</select>
              <button type="submit">Add Task</button>
            </from>
            {/* grid */}
            <div>
              <div className="grid">
                {/* Column component mapping */}
              </div>
            </div>
          </div>
        </div>

      </DndProvider>
    </>
  )
}
