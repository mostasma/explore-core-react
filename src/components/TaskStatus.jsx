import React from "react";

export default function TaskStatus({ tasks, onComplete }) {
  return (
    <div className="task-status">
      <h3>Task Status</h3>

      {tasks.length === 0 ? <p style={{color:"#6b7280"}}>No tasks in progress</p> : (
        tasks.map(task => (
          <div className="task-item" key={task.id}>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700 }}>{task.title}</div>
              <div style={{ fontSize:12, color:"#6b7280" }}>{task.customer}</div>
            </div>
            <div>
              <button onClick={() => onComplete(task.id)}>Complete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
