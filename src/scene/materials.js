import * as THREE from "three";

const repeat = (texture, x, y) => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(x, y);
  texture.anisotropy = 4;
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
  makeCanvasTexture(512, 512, (ctx, w, h) => {
    const base = ctx.createLinearGradient(0, 0, w, h);
    base.addColorStop(0, "#8f5d35");
    base.addColorStop(0.45, "#b67a44");
    base.addColorStop(1, "#6b3f24");
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
      ctx.strokeStyle = `rgba(51, 32, 21, ${0.08 + Math.random() * 0.15})`;
      ctx.beginPath();
      ctx.ellipse(x, y, 18 + Math.random() * 26, 2 + Math.random() * 4, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.stroke();
    }
  });

const tileTexture = () =>
  makeCanvasTexture(512, 512, (ctx, w, h) => {
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
    gradient.addColorStop(0, "#101932");
    gradient.addColorStop(0.55, "#070b1c");
    gradient.addColorStop(1, "#02040c");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 360; i += 1) {
      const r = Math.random();
      ctx.fillStyle = r > 0.94 ? "#e0f2fe" : r > 0.82 ? "#a5f3fc" : "#f8fafc";
      ctx.globalAlpha = 0.25 + Math.random() * 0.75;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 0.5 + Math.random() * 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.strokeStyle = "rgba(56, 189, 248, 0.18)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i += 1) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * w, Math.random() * h);
      ctx.bezierCurveTo(Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h);
      ctx.stroke();
    }
  });

const fabricTexture = (base = "#334155", accent = "#22d3ee") =>
  makeCanvasTexture(256, 256, (ctx, w, h) => {
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
  makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = "#061018";
    ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 64) {
      for (let y = 0; y < h; y += 64) {
        ctx.fillStyle = (x / 64 + y / 64) % 2 ? "#0f2a38" : "#111827";
        ctx.fillRect(x, y, 64, 64);
      }
    }
    ctx.strokeStyle = "rgba(34, 211, 238, 0.38)";
    ctx.lineWidth = 2;
    for (let i = 0; i <= w; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }
  });

export const createMaterials = () => {
  const textures = {
    wood: repeat(woodTexture(), 5, 4),
    tile: repeat(tileTexture(), 2, 2),
    wall: repeat(wallTexture(), 3, 2),
    stars: repeat(starTexture(), 2, 1),
    darkFabric: fabricTexture("#172033", "#22d3ee"),
    purpleFabric: fabricTexture("#2e1065", "#f0abfc"),
    carpet: repeat(checkerTexture(), 2, 1.5)
  };

  const materials = {
    floor: new THREE.MeshStandardMaterial({ map: textures.wood, roughness: 0.55, metalness: 0.04 }),
    balconyFloor: new THREE.MeshStandardMaterial({ color: "#3e5567", roughness: 0.65, metalness: 0.05 }),
    bathroomFloor: new THREE.MeshStandardMaterial({ map: textures.tile, roughness: 0.38, metalness: 0.02 }),
    wall: new THREE.MeshStandardMaterial({ map: textures.wall, roughness: 0.72 }),
    accentWall: new THREE.MeshStandardMaterial({ color: "#07111f", roughness: 0.6, metalness: 0.05 }),
    ceiling: new THREE.MeshStandardMaterial({ map: textures.stars, roughness: 0.4, metalness: 0.08, emissive: "#050816", emissiveIntensity: 0.45 }),
    black: new THREE.MeshStandardMaterial({ color: "#020617", roughness: 0.42, metalness: 0.16 }),
    charcoal: new THREE.MeshStandardMaterial({ color: "#111827", roughness: 0.48, metalness: 0.18 }),
    graphite: new THREE.MeshStandardMaterial({ color: "#1f2937", roughness: 0.55, metalness: 0.24 }),
    chrome: new THREE.MeshStandardMaterial({ color: "#cbd5e1", roughness: 0.18, metalness: 0.72 }),
    white: new THREE.MeshStandardMaterial({ color: "#f8fafc", roughness: 0.45, metalness: 0.02 }),
    cream: new THREE.MeshStandardMaterial({ color: "#e9dfd2", roughness: 0.58 }),
    bedBase: new THREE.MeshStandardMaterial({ color: "#293449", roughness: 0.54, metalness: 0.08 }),
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
    woodDark: new THREE.MeshStandardMaterial({ color: "#4a2d1d", roughness: 0.62, metalness: 0.02 }),
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
