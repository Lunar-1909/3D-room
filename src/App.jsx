import React, { useEffect, useRef, useState } from "react";
import { buildRoomScene } from "./scene/buildRoomScene.js";

export default function App() {
  const mountRef = useRef(null);
  const roomRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [focusLabel, setFocusLabel] = useState("Sẵn sàng");

  useEffect(() => {
    if (!mountRef.current) return undefined;

    const room = buildRoomScene({
      mount: mountRef.current,
      onHover: setTooltip,
      onFocus: setFocusLabel
    });

    roomRef.current = room;

    return () => {
      room.dispose();
      roomRef.current = null;
    };
  }, []);

  return (
    <main className="app-shell">
      <div ref={mountRef} className="scene-host" aria-label="Mô hình phòng 3D phong cách vũ trụ gaming" />

      <div className="topbar">
        <div>
          <strong>Cosmic Gaming Room</strong>
          <span>{focusLabel}</span>
        </div>
        <button type="button" onClick={() => roomRef.current?.resetView()} aria-label="Đưa góc nhìn về vị trí ban đầu">
          Reset
        </button>
      </div>

      <div className="crosshair" aria-hidden="true" />

      {tooltip ? (
        <aside className="item-card" style={{ left: tooltip.x, top: tooltip.y }}>
          <header>
            <strong>{tooltip.name}</strong>
            <span>{tooltip.price}</span>
          </header>
          <p>{tooltip.use}</p>
          {tooltip.action ? <small>{tooltip.action}</small> : null}
        </aside>
      ) : null}
    </main>
  );
}
