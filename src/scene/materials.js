import * as THREE from "three";

const repeat = (texture, x, y) => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(x, y);
  texture.anisotropy = 8;
  return texture;
};

const makeCanvasTexture = (width, height, draw) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
};

const woodTexture = () =>
  makeCanvasTexture(1024, 1024, (ctx, w, h) => {
    const base = ctx.createLinearGradient(0, 0, w, h);
    base.addColorStop(0, "#c98954");
    base.addColorStop(0.45, "#e5b47c");
    base.addColorStop(1, "#a9693b");
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 26; i += 1) {
      const y = (i / 26) * h;
      ctx.fillStyle = i % 2 ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
      ctx.fillRect(0, y, w, 8 + Math.sin(i) * 5);
    }

    ctx.strokeStyle = "rgba(54, 31, 18, 0.38)";
    ctx.lineWidth = 2;
    for (let x = 0; x < w; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
      ctx.stroke();
    }

    for (let i = 0; i < 90; i += 1) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      ctx.strokeStyle = `rgba(78, 48, 26, ${0.06 + Math.random() * 0.12})`;
      ctx.beginPath();
      ctx.ellipse(x, y, 18 + Math.random() * 26, 2 + Math.random() * 4, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.stroke();
    }
  });

const brickTexture = () =>
  makeCanvasTexture(1024, 1024, (ctx, w, h) => {
    ctx.fillStyle = "#f4d8c8";
    ctx.fillRect(0, 0, w, h);
    const brickH = 58;
    const brickW = 146;
    for (let y = 0; y < h + brickH; y += brickH) {
      const offset = Math.floor(y / brickH) % 2 ? -brickW / 2 : 0;
      for (let x = offset; x < w + brickW; x += brickW) {
        const warm = 205 + Math.floor(Math.random() * 34);
        const red = 176 + Math.floor(Math.random() * 36);
        ctx.fillStyle = `rgb(${warm}, ${red}, ${145 + Math.floor(Math.random() * 28)})`;
        ctx.fillRect(x + 4, y + 4, brickW - 8, brickH - 8);
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.fillRect(x + 10, y + 9, brickW - 24, 4);
        ctx.fillStyle = "rgba(114,72,52,0.08)";
        ctx.fillRect(x + 7, y + brickH - 13, brickW - 18, 5);
      }
    }
    ctx.strokeStyle = "rgba(255,250,244,0.82)";
    ctx.lineWidth = 5;
    for (let y = 0; y < h + brickH; y += brickH) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  });

const tileTexture = () =>
  makeCanvasTexture(1024, 1024, (ctx, w, h) => {
    ctx.fillStyle = "#dbe5eb";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#aab7c1";
    ctx.lineWidth = 3;
    for (let x = 0; x <= w; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    for (let i = 0; i < 120; i += 1) {
      ctx.fillStyle = `rgba(88, 106, 121, ${0.04 + Math.random() * 0.08})`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });

const wallTexture = () =>
  makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = "#eef4f8";
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 650; i += 1) {
      ctx.fillStyle = `rgba(42, 51, 68, ${0.018 + Math.random() * 0.035})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1, 1);
    }
  });

const starTexture = () =>
  makeCanvasTexture(1024, 1024, (ctx, w, h) => {
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.7);
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.5, "#f6fbff");
    gradient.addColorStop(1, "#e9eff6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    const nebula = ctx.createRadialGradient(w * 0.78, h * 0.22, 0, w * 0.78, h * 0.22, w * 0.42);
    nebula.addColorStop(0, "rgba(244,114,182,0.32)");
    nebula.addColorStop(0.48, "rgba(34,211,238,0.12)");
    nebula.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 360; i += 1) {
      const r = Math.random();
      ctx.fillStyle = r > 0.94 ? "#0f172a" : r > 0.82 ? "#0891b2" : "#64748b";
      ctx.globalAlpha = 0.16 + Math.random() * 0.34;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 0.5 + Math.random() * 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.strokeStyle = "rgba(124, 58, 237, 0.16)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i += 1) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * w, Math.random() * h);
      ctx.bezierCurveTo(Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h);
      ctx.stroke();
    }
  });

const fabricTexture = (base = "#334155", accent = "#22d3ee") =>
  makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < h; i += 5) {
      ctx.strokeStyle = i % 2 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.12)";
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i + Math.sin(i * 0.05) * 4);
      ctx.stroke();
    }
    ctx.strokeStyle = accent;
    ctx.globalAlpha = 0.45;
    ctx.lineWidth = 2;
    for (let i = 0; i < 7; i += 1) {
      ctx.beginPath();
      ctx.moveTo(-20, i * 42);
      ctx.lineTo(w + 20, i * 42 + 88);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  });

const checkerTexture = () =>
  makeCanvasTexture(1024, 512, (ctx, w, h) => {
    ctx.fillStyle = "#fff7ed";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 18;
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.strokeStyle = "#b91c1c";
    ctx.lineWidth = 9;
    ctx.strokeRect(48, 48, w - 96, h - 96);
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 5;
    for (let x = 86; x < w - 86; x += 138) {
      ctx.beginPath();
      ctx.moveTo(x, 70);
      ctx.lineTo(x + 52, 128);
      ctx.lineTo(x, 186);
      ctx.lineTo(x - 52, 128);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = x % 2 ? "#ea580c" : "#0f766e";
      ctx.globalAlpha = 0.72;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    for (let x = 110; x < w - 110; x += 185) {
      ctx.strokeStyle = "#111827";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.52);
      ctx.lineTo(x + 76, h * 0.28);
      ctx.lineTo(x + 152, h * 0.52);
      ctx.lineTo(x + 76, h * 0.76);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = x % 2 ? "#dc2626" : "#f59e0b";
      ctx.globalAlpha = 0.76;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    for (let x = 34; x < w; x += 28) {
      ctx.strokeStyle = "rgba(17,24,39,0.45)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, h - 26);
      ctx.lineTo(x + 12, h - 5);
      ctx.stroke();
    }
  });

export const createMaterials = () => {
  const textures = {
    wood: repeat(woodTexture(), 5, 4),
    tile: repeat(tileTexture(), 2, 2),
    wall: repeat(brickTexture(), 3.8, 2.4),
    stars: repeat(starTexture(), 2, 1),
    darkFabric: fabricTexture("#d7dde8", "#64748b"),
    purpleFabric: fabricTexture("#8f7d99", "#334155"),
    carpet: repeat(checkerTexture(), 2, 1.5)
  };

  const materials = {
    floor: new THREE.MeshStandardMaterial({ map: textures.wood, roughness: 0.55, metalness: 0.04 }),
    balconyFloor: new THREE.MeshStandardMaterial({ color: "#d9e2e8", roughness: 0.58, metalness: 0.04 }),
    bathroomFloor: new THREE.MeshStandardMaterial({ map: textures.tile, roughness: 0.38, metalness: 0.02 }),
    wall: new THREE.MeshStandardMaterial({ map: textures.wall, roughness: 0.72 }),
    accentWall: new THREE.MeshStandardMaterial({ color: "#f9e9dc", roughness: 0.68, metalness: 0.02 }),
    ceiling: new THREE.MeshStandardMaterial({ map: textures.stars, roughness: 0.46, metalness: 0.02, emissive: "#f8fbff", emissiveIntensity: 0.42 }),
    black: new THREE.MeshStandardMaterial({ color: "#111827", roughness: 0.42, metalness: 0.14 }),
    charcoal: new THREE.MeshStandardMaterial({ color: "#263142", roughness: 0.5, metalness: 0.12 }),
    graphite: new THREE.MeshStandardMaterial({ color: "#4b5563", roughness: 0.55, metalness: 0.18 }),
    chrome: new THREE.MeshStandardMaterial({ color: "#cbd5e1", roughness: 0.18, metalness: 0.72 }),
    white: new THREE.MeshStandardMaterial({ color: "#f8fafc", roughness: 0.45, metalness: 0.02 }),
    cream: new THREE.MeshStandardMaterial({ color: "#e9dfd2", roughness: 0.58 }),
    trim: new THREE.MeshStandardMaterial({ color: "#f8f1e7", roughness: 0.5, metalness: 0.02 }),
    warmWood: new THREE.MeshStandardMaterial({ color: "#b87945", roughness: 0.58, metalness: 0.02 }),
    cabinetInterior: new THREE.MeshStandardMaterial({ color: "#f1e7d7", roughness: 0.62, metalness: 0.02 }),
    shadowGap: new THREE.MeshStandardMaterial({ color: "#111827", roughness: 0.7, metalness: 0.02 }),
    rubber: new THREE.MeshStandardMaterial({ color: "#0f172a", roughness: 0.72, metalness: 0.02 }),
    warmLight: new THREE.MeshStandardMaterial({ color: "#fde68a", emissive: "#f59e0b", emissiveIntensity: 0.9, roughness: 0.34 }),
    whitePlastic: new THREE.MeshStandardMaterial({ color: "#f9fafb", roughness: 0.32, metalness: 0.01 }),
    bedBase: new THREE.MeshStandardMaterial({ color: "#5d6278", roughness: 0.54, metalness: 0.08 }),
    mattress: new THREE.MeshStandardMaterial({ map: textures.darkFabric, roughness: 0.72 }),
    blanket: new THREE.MeshStandardMaterial({ map: textures.purpleFabric, roughness: 0.78 }),
    purpleFabric: new THREE.MeshStandardMaterial({ map: textures.purpleFabric, roughness: 0.8 }),
    carpet: new THREE.MeshStandardMaterial({ map: textures.carpet, roughness: 0.86 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: "#b8ecff",
      transparent: true,
      opacity: 0.28,
      roughness: 0.04,
      metalness: 0,
      transmission: 0.42,
      thickness: 0.12
    }),
    blueGlass: new THREE.MeshPhysicalMaterial({
      color: "#67e8f9",
      transparent: true,
      opacity: 0.36,
      roughness: 0.08,
      transmission: 0.22,
      thickness: 0.08
    }),
    neonCyan: new THREE.MeshStandardMaterial({ color: "#22d3ee", emissive: "#22d3ee", emissiveIntensity: 1.8, roughness: 0.2 }),
    neonPink: new THREE.MeshStandardMaterial({ color: "#f472b6", emissive: "#f472b6", emissiveIntensity: 1.7, roughness: 0.2 }),
    neonGreen: new THREE.MeshStandardMaterial({ color: "#86efac", emissive: "#22c55e", emissiveIntensity: 1.25, roughness: 0.2 }),
    neonViolet: new THREE.MeshStandardMaterial({ color: "#a78bfa", emissive: "#7c3aed", emissiveIntensity: 1.35, roughness: 0.22 }),
    red: new THREE.MeshStandardMaterial({ color: "#ef4444", roughness: 0.56 }),
    yellow: new THREE.MeshStandardMaterial({ color: "#facc15", roughness: 0.52 }),
    blue: new THREE.MeshStandardMaterial({ color: "#38bdf8", roughness: 0.5 }),
    green: new THREE.MeshStandardMaterial({ color: "#22c55e", roughness: 0.54 }),
    woodDark: new THREE.MeshStandardMaterial({ color: "#8a5632", roughness: 0.6, metalness: 0.02 }),
    plant: new THREE.MeshStandardMaterial({ color: "#16a34a", roughness: 0.74 }),
    soil: new THREE.MeshStandardMaterial({ color: "#3f2b1d", roughness: 0.9 }),
    mirror: new THREE.MeshPhysicalMaterial({ color: "#d9fbff", roughness: 0.05, metalness: 0.28, transparent: true, opacity: 0.65 })
  };

  const disposable = [
    ...Object.values(textures),
    ...Object.values(materials)
  ];

  return {
    ...materials,
    dispose() {
      disposable.forEach((item) => item.dispose());
    }
  };
};
