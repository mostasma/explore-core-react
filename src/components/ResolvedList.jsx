import React from "react";

export default function ResolvedList({ resolved, onRestore }) {
  return (
    <div className="resolved-list">
      <h3>Resolved Tasks</h3>
      {resolved.length === 0 ? <p style={{color:"#6b7280"}}>No resolved tasks</p> : (
        resolved.map(r => (
          <div key={r.id} className="resolved-item">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ fontWeight:700 }}>{r.title}</div>
                <div style={{ fontSize:12, color:"#6b7280" }}>{r.customer}</div>
              </div>
              <div>
                <button style={{ background:"#ef4444", color:"white", padding:"6px 10px", borderRadius:6, border:"none", cursor:"pointer" }} onClick={() => onRestore(r.id)}>Restore</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
