import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { createMaterials } from "./materials.js";

const TAU = Math.PI * 2;
const clamp = THREE.MathUtils.clamp;

const catalog = {
  door: {
    name: "Cửa chính chống ồn",
    price: "4.900.000 vnd",
    use: "Cửa gỗ bản lề êm, tạo lối vào phòng và giảm tiếng ồn từ hành lang.",
    action: "Click để mở hoặc đóng cửa."
  },
  curtain: {
    name: "Rèm ban công hai lớp",
    price: "2.650.000 vnd",
    use: "Lớp voan + lớp cản sáng, che cửa kính và làm nền ánh sáng RGB mềm hơn.",
    action: "Click để kéo rèm."
  },
  ac: {
    name: "Máy lạnh âm trần nối ống gió",
    price: "18.500.000 vnd",
    use: "Cấp gió lạnh qua khe dài sát trần, hợp phòng nhỏ vì không chiếm diện tích tường.",
    action: "Click để bật/tắt luồng hơi lạnh."
  },
  washer: {
    name: "Máy giặt cửa ngang",
    price: "7.800.000 vnd",
    use: "Đặt cạnh khu vệ sinh để gom đường nước; drum có mô phỏng đang quay.",
    action: "Click để chạy hoặc dừng."
  },
  wardrobe: {
    name: "Tủ quần áo kính khói",
    price: "12.900.000 vnd",
    use: "Tủ cao có đèn led, treo áo hoodie, đồ gaming, balo và ngăn phụ kiện.",
    action: "Click để mở hoặc đóng cánh tủ."
  },
  stairDrawer: {
    name: "Bậc thang kéo hộc chứa đồ",
    price: "1.250.000 vnd / bậc",
    use: "Mỗi bậc là một hộc kéo để cất chăn mỏng, dây sạc, hộp phụ kiện hoặc giày nhẹ.",
    action: "Click từng bậc để kéo hộc ra/vào."
  },
  bed: {
    name: "Giường tầng cao gaming",
    price: "16.800.000 vnd",
    use: "Nâng giường lên cao để bên dưới có kho bí mật, tủ và lối sinh hoạt rộng hơn."
  },
  secretCabinet: {
    name: "Kho bí mật dưới giường",
    price: "5.600.000 vnd",
    use: "Kho âm bên dưới giường để vali, thùng máy dự phòng, hộp đồ hiếm và đồ ít dùng.",
    action: "Click để trượt cánh kho."
  },
  desk: {
    name: "Bàn học + góc PC RGB",
    price: "9.400.000 vnd",
    use: "Bàn làm việc có màn hình đôi, PC kính, dây RGB và hộc kỹ thuật giấu dây."
  },
  chair: {
    name: "Ghế gaming công thái học",
    price: "3.900.000 vnd",
    use: "Ghế lưng cao, tựa cổ và tay vịn, đặt sát bàn học để chơi game/làm việc lâu."
  },
  tvConsole: {
    name: "Kệ dưới tivi treo tường",
    price: "6.200.000 vnd",
    use: "Kệ thấp có ngăn kéo, mô hình trang trí và khe đi dây sạch.",
    action: "Click để kéo ngăn giữa."
  },
  sofa: {
    name: "Sofa mini + bàn trà",
    price: "7.700.000 vnd",
    use: "Khu nghỉ nhỏ đối diện tivi, có bàn trà thấp và thảm caro neon."
  },
  balconyDry: {
    name: "Khu phơi đồ ban công",
    price: "3.300.000 vnd",
    use: "Thanh phơi gấp, quần áo đang phơi, chậu cây và sàn chống nước."
  },
  shoeRack: {
    name: "Kệ giày cửa vào",
    price: "1.850.000 vnd",
    use: "Giữ giày dép gọn ở cửa, phía trên có khay chìa khóa và mũ bảo hiểm."
  },
  bathroom: {
    name: "Toilet + phòng tắm kính",
    price: "22.000.000 vnd",
    use: "Khu vệ sinh lát gạch, có bồn cầu, lavabo, phòng tắm kính và bồn nước máy giặt."
  },
  bathroomDoor: {
    name: "Cửa toilet bản lề êm",
    price: "3.200.000 vnd",
    use: "Cửa riêng cho khu toilet/phòng tắm, đặt đúng ở vách ngăn theo mặt bằng để lối đi không bị lẫn với cửa chính.",
    action: "Click để mở hoặc đóng cửa toilet."
  },
  dining: {
    name: "Bàn ăn gấp 2 lớp",
    price: "4.400.000 vnd",
    use: "Bàn ăn cạnh sofa, mặt bàn phụ có thể mở rộng khi cần ăn hoặc làm đồ thủ công.",
    action: "Click để mở/cất cánh bàn."
  },
  window: {
    name: "Cửa kính ban công",
    price: "8.500.000 vnd",
    use: "Cửa kính lấy sáng, tách khu phơi với phòng chính và giữ hơi lạnh."
  },
  rgb: {
    name: "Dây LED RGB chạy viền",
    price: "1.600.000 vnd",
    use: "Viền led chạy trần, giường và bàn tạo vibe vũ trụ + gaming nhưng vẫn đủ sáng sinh hoạt."
  },
  shelf: {
    name: "Kệ nhiên tầng cao",
    price: "4.950.000 vnd",
    use: "Kệ cao chứa sách, hộp đồ, mô hình sưu tầm và thiết bị mạng gần cửa gió máy lạnh."
  }
};

class Animator {
  constructor() {
    this.tweens = [];
  }

  add(duration, update, done) {
    this.tweens.push({
      duration,
      update,
      done,
      elapsed: 0
    });
  }

  tick(delta) {
    this.tweens = this.tweens.filter((tween) => {
      tween.elapsed += delta;
      const progress = clamp(tween.elapsed / tween.duration, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      tween.update(eased);
      if (progress >= 1) {
        tween.done?.();
        return false;
      }
      return true;
    });
  }
}

const box = (parent, material, size, position, name = "box") => {
  const minSide = Math.min(size[0], size[1], size[2]);
  const shouldRound = minSide >= 0.08 && size[0] <= 6 && size[1] <= 3 && size[2] <= 6;
  const radius = Math.min(0.032, minSide * 0.18);
  const geometry = shouldRound
    ? new RoundedBoxGeometry(size[0], size[1], size[2], 1, radius)
    : new THREE.BoxGeometry(size[0], size[1], size[2]);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const cyl = (parent, material, radiusTop, radiusBottom, height, position, rotation = [0, 0, 0], segments = 32, name = "cylinder") => {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const sphere = (parent, material, radius, position, scale = [1, 1, 1], name = "sphere") => {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 16), material);
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.scale.set(scale[0], scale[1], scale[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const plane = (parent, material, size, position, rotation = [0, 0, 0], name = "plane") => {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size[0], size[1]), material);
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const makeLedStrip = (parent, material, start, end, thickness = 0.035) => {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const dz = end[2] - start[2];
  const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(length, thickness, thickness), material);
  mesh.position.set((start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2);
  mesh.rotation.y = Math.atan2(dz, dx);
  parent.add(mesh);
  return mesh;
};

const makeInfo = (root, info, action, registry) => {
  root.userData.info = info;
  root.userData.action = action;
  root.traverse((child) => {
    if (child.isMesh) {
      child.userData.hotspot = root;
      registry.push(child);
    }
  });
};

const setHighlight = (helper, target) => {
  if (!target) {
    helper.visible = false;
    return;
  }
  helper.visible = true;
  helper.setFromObject(target);
};

const createWindowPanel = (parent, mats, position, width, height, label) => {
  const group = new THREE.Group();
  group.name = label;
  group.position.set(position[0], position[1], position[2]);
  parent.add(group);

  box(group, mats.black, [width + 0.2, height + 0.2, 0.045], [0, 0, -0.018], `${label} black trim`);
  box(group, mats.glass, [width, height, 0.055], [0, 0, 0.012], `${label} glass`);

  for (let i = -1; i <= 1; i += 1) {
    box(group, mats.black, [0.04, height, 0.07], [(i * width) / 4, 0, 0.055], `${label} vertical mullion`);
  }
  for (let i = -1; i <= 1; i += 1) {
    box(group, mats.black, [width, 0.04, 0.07], [0, (i * height) / 4, 0.055], `${label} horizontal mullion`);
  }

  const leafMat = new THREE.MeshStandardMaterial({ color: "#c45a22", roughness: 0.72 });
  for (let i = 0; i < 34; i += 1) {
    const leaf = box(group, leafMat, [0.08 + Math.random() * 0.06, 0.04 + Math.random() * 0.08, 0.018], [
      -width * 0.44 + Math.random() * width * 0.88,
      -height * 0.42 + Math.random() * height * 0.92,
      0.09
    ], `${label} autumn leaf`);
    leaf.rotation.z = Math.random() * TAU;
  }

  return group;
};

const createFloorPlant = (parent, mats, position, scale = 1, name = "floor plant") => {
  const group = new THREE.Group();
  group.name = name;
  group.position.set(position[0], position[1], position[2]);
  group.scale.setScalar(scale);
  parent.add(group);

  cyl(group, mats.soil, 0.22, 0.18, 0.42, [0, 0.21, 0], [0, 0, 0], 28, `${name} pot`);
  for (let i = 0; i < 13; i += 1) {
    const leaf = sphere(group, mats.plant, 0.17, [
      Math.cos((i / 13) * TAU) * (0.18 + Math.random() * 0.16),
      0.58 + Math.random() * 0.38,
      Math.sin((i / 13) * TAU) * (0.18 + Math.random() * 0.16)
    ], [0.45, 1.45, 0.18], `${name} leaf`);
    leaf.rotation.set(Math.random() * 0.7, Math.random() * TAU, Math.random() * 0.7);
  }
  return group;
};

const createRoomShell = (scene, mats, interactives) => {
  const shell = new THREE.Group();
  shell.name = "room-shell";
  scene.add(shell);

  box(shell, mats.floor, [15.2, 0.12, 8.4], [0, -0.06, 0.1], "wood floor");
  box(shell, mats.balconyFloor, [2.9, 0.11, 5.8], [8.85, -0.055, 0.85], "balcony floor");
  box(shell, mats.bathroomFloor, [3.8, 0.13, 2.55], [-5.25, -0.035, 2.95], "bathroom tile floor");

  box(shell, mats.wall, [15.5, 3.1, 0.14], [0, 1.55, -4.15], "back wall");
  box(shell, mats.wall, [0.14, 3.1, 0.78], [-7.62, 1.55, -3.72], "left wall before main door");
  box(shell, mats.wall, [0.14, 3.1, 6.0], [-7.62, 1.55, 0.88], "left wall after main door");
  box(shell, mats.wall, [5.0, 3.1, 0.14], [-5.1, 1.55, 4.27], "front bath wall");
  box(shell, mats.wall, [3.1, 3.1, 0.14], [5.9, 1.55, 4.27], "front desk wall");
  box(shell, mats.wall, [0.14, 3.1, 3.1], [-3.15, 1.55, 2.75], "bath divider");
  box(shell, mats.wall, [2.05, 3.1, 0.14], [-6.18, 1.55, 1.63], "bath top divider left");
  box(shell, mats.wall, [0.7, 3.1, 0.14], [-3.5, 1.55, 1.63], "bath top divider right");
  box(shell, mats.accentWall, [4.8, 3.05, 0.08], [-0.15, 1.58, -4.06], "tv accent wall");

  box(shell, mats.trim, [15.35, 0.08, 0.08], [0, 0.18, -4.0], "back wall baseboard");
  box(shell, mats.trim, [0.08, 0.08, 5.85], [-7.48, 0.18, 0.92], "left wall baseboard");
  box(shell, mats.trim, [4.85, 0.08, 0.08], [-5.1, 0.18, 4.12], "front bath baseboard");
  box(shell, mats.trim, [3.0, 0.08, 0.08], [5.9, 0.18, 4.12], "front desk baseboard");
  box(shell, mats.trim, [0.12, 2.5, 0.08], [-7.48, 1.3, -3.36], "main door back jamb");
  box(shell, mats.trim, [0.12, 2.5, 0.08], [-7.48, 1.3, -2.28], "main door front jamb");
  box(shell, mats.trim, [0.12, 0.08, 1.22], [-7.48, 2.52, -2.82], "main door header");
  box(shell, mats.trim, [0.08, 2.36, 0.12], [-5.15, 1.25, 1.52], "toilet door left jamb");
  box(shell, mats.trim, [0.08, 2.36, 0.12], [-4.15, 1.25, 1.52], "toilet door right jamb");
  box(shell, mats.trim, [1.12, 0.08, 0.12], [-4.65, 2.42, 1.52], "toilet door header");

  const ceiling = box(shell, mats.ceiling, [15.2, 0.08, 8.3], [0, 3.12, 0.08], "star ceiling");
  ceiling.receiveShadow = false;

  makeLedStrip(shell, mats.neonCyan, [-7.05, 2.94, -3.62], [7.05, 2.94, -3.62], 0.035);
  makeLedStrip(shell, mats.neonPink, [7.05, 2.94, -3.62], [7.05, 2.94, 3.86], 0.035);
  makeLedStrip(shell, mats.neonViolet, [-7.05, 2.94, 3.86], [7.05, 2.94, 3.86], 0.035);
  makeLedStrip(shell, mats.neonGreen, [-7.05, 2.94, -3.62], [-7.05, 2.94, 3.86], 0.035);

  createWindowPanel(shell, mats, [-5.15, 1.65, -4.03], 2.2, 1.55, "wide back window");
  createWindowPanel(shell, mats, [2.65, 1.65, -4.03], 2.35, 1.55, "desk view window");

  const glassDoor = new THREE.Group();
  glassDoor.name = "balcony glass";
  box(glassDoor, mats.glass, [0.08, 2.55, 4.9], [7.42, 1.35, 0.95], "glass panel");
  for (let z = -1.3; z <= 3.2; z += 1.5) {
    box(glassDoor, mats.chrome, [0.12, 2.55, 0.04], [7.37, 1.35, z], "glass mullion");
  }
  box(glassDoor, mats.chrome, [0.12, 0.04, 4.9], [7.36, 2.62, 0.95], "glass top rail");
  box(glassDoor, mats.chrome, [0.12, 0.04, 4.9], [7.36, 0.12, 0.95], "glass bottom rail");
  shell.add(glassDoor);
  makeInfo(glassDoor, catalog.window, null, interactives);

  return shell;
};

const createDoor = (scene, mats, animator, interactives) => {
  const pivot = new THREE.Group();
  pivot.position.set(-7.56, 0, -3.32);
  pivot.name = "main door pivot";
  const panel = box(pivot, mats.woodDark, [0.08, 2.35, 1.05], [0.02, 1.18, 0.52], "main door");
  panel.castShadow = true;
  cyl(pivot, mats.chrome, 0.035, 0.035, 0.08, [0.1, 1.17, 0.88], [Math.PI / 2, 0, 0], 18, "door knob");
  scene.add(pivot);

  let open = false;
  makeInfo(
    pivot,
    catalog.door,
    () => {
      const from = pivot.rotation.y;
      const to = open ? 0 : Math.PI * 0.52;
      open = !open;
      animator.add(0.68, (v) => {
        pivot.rotation.y = THREE.MathUtils.lerp(from, to, v);
      });
      return open ? "Cửa đã mở" : "Cửa đã đóng";
    },
    interactives
  );
};

const createBathroomDoor = (scene, mats, animator, interactives) => {
  const pivot = new THREE.Group();
  pivot.name = "bathroom door pivot";
  pivot.position.set(-4.15, 0, 1.58);
  scene.add(pivot);

  box(pivot, mats.trim, [0.98, 2.18, 0.08], [-0.49, 1.09, 0.02], "bathroom door panel");
  box(pivot, mats.chrome, [0.18, 0.035, 0.035], [-0.12, 1.08, -0.05], "bathroom door handle");
  box(pivot, mats.shadowGap, [0.88, 0.02, 0.045], [-0.5, 0.09, -0.03], "bathroom door threshold");

  let open = false;
  makeInfo(
    pivot,
    catalog.bathroomDoor,
    () => {
      const from = pivot.rotation.y;
      const to = open ? 0 : Math.PI / 2;
      open = !open;
      animator.add(0.58, (v) => {
        pivot.rotation.y = THREE.MathUtils.lerp(from, to, v);
      });
      return open ? "Cửa toilet đã mở" : "Cửa toilet đã đóng";
    },
    interactives
  );
};

const createTvConsole = (scene, mats, animator, interactives) => {
  const group = new THREE.Group();
  group.name = "tv console";
  group.position.set(-0.25, 0, -3.78);
  scene.add(group);

  box(group, mats.charcoal, [3.9, 0.46, 0.42], [0, 0.58, 0], "tv cabinet body");
  box(group, mats.black, [1.0, 0.38, 0.45], [-1.35, 0.6, 0.04], "left drawer");
  const drawer = new THREE.Group();
  box(drawer, mats.graphite, [1.05, 0.38, 0.48], [0, 0.6, 0.04], "center drawer");
  box(drawer, mats.chrome, [0.36, 0.025, 0.03], [0, 0.64, 0.29], "drawer handle");
  group.add(drawer);
  box(group, mats.black, [1.0, 0.38, 0.45], [1.35, 0.6, 0.04], "right drawer");
  box(group, mats.black, [2.95, 1.18, 0.08], [0, 1.75, -0.07], "tv screen");
  box(group, mats.neonCyan, [2.64, 0.05, 0.035], [0, 2.26, -0.02], "tv glow top");
  box(group, mats.neonPink, [2.64, 0.05, 0.035], [0, 1.23, -0.02], "tv glow bottom");
  sphere(group, mats.neonViolet, 0.12, [1.88, 0.93, 0.08], [1, 1, 1], "astronaut model");
  cyl(group, mats.chrome, 0.08, 0.14, 0.32, [-1.9, 0.9, 0.05], [0, 0, 0], 6, "small plant pot");
  sphere(group, mats.plant, 0.22, [-1.9, 1.16, 0.05], [0.7, 1.1, 0.7], "small plant");

  let open = false;
  makeInfo(
    group,
    catalog.tvConsole,
    () => {
      const from = drawer.position.z;
      const to = open ? 0 : 0.54;
      open = !open;
      animator.add(0.55, (v) => {
        drawer.position.z = THREE.MathUtils.lerp(from, to, v);
      });
      return open ? "Ngăn tivi đã kéo ra" : "Ngăn tivi đã đóng";
    },
    interactives
  );
};

const createAc = (scene, mats, animator, interactives, animated) => {
  const group = new THREE.Group();
  group.name = "ducted ac";
  group.position.set(3.85, 2.64, -4.02);
  scene.add(group);

  box(group, mats.white, [5.2, 0.42, 0.34], [0, 0, 0.05], "ac soffit");
  box(group, mats.white, [5.35, 0.18, 0.38], [0, -0.3, 0.08], "ac face");
  for (let i = 0; i < 29; i += 1) {
    const x = -2.42 + i * 0.17;
    const blade = box(group, mats.graphite, [0.045, 0.12, 0.035], [x, -0.3, 0.29], "ac grille blade");
    blade.rotation.x = -0.18;
    animated.acBlades.push(blade);
  }
  box(group, mats.chrome, [5.15, 0.035, 0.035], [0, -0.42, 0.31], "ac lower trim");

  const mist = new THREE.Group();
  mist.visible = false;
  for (let i = 0; i < 46; i += 1) {
    const mat = new THREE.MeshBasicMaterial({
      color: i % 3 ? "#a7f3ff" : "#dbeafe",
      transparent: true,
      opacity: 0.16,
      depthWrite: false
    });
    const puff = sphere(mist, mat, 0.06 + Math.random() * 0.04, [
      -2.35 + Math.random() * 4.7,
      -0.46 - Math.random() * 0.18,
      0.36 + Math.random() * 0.18
    ], [1.7, 0.45, 0.65], "cold mist");
    puff.userData.seed = Math.random() * 100;
    puff.castShadow = false;
    puff.receiveShadow = false;
  }
  group.add(mist);

  let on = false;
  makeInfo(
    group,
    catalog.ac,
    () => {
      on = !on;
      mist.visible = on;
      animated.acRunning = on;
      const from = group.children[1].material.emissiveIntensity || 0;
      animator.add(0.45, (v) => {
        const intensity = THREE.MathUtils.lerp(from, on ? 0.35 : 0, v);
        group.children[1].material.emissive = new THREE.Color("#b6f3ff");
        group.children[1].material.emissiveIntensity = intensity;
      });
      return on ? "Máy lạnh đang thổi hơi lạnh" : "Máy lạnh đã tắt";
    },
    interactives
  );

  animated.acMist = mist;
};

const createCurtain = (scene, mats, animator, interactives) => {
  const group = new THREE.Group();
  group.name = "balcony curtain";
  group.position.set(7.13, 0, 0.94);
  scene.add(group);

  const rail = box(group, mats.chrome, [0.07, 0.08, 5.3], [0, 2.72, 0], "curtain rail");
  rail.castShadow = false;
  const left = new THREE.Group();
  const right = new THREE.Group();
  group.add(left, right);

  for (let i = 0; i < 5; i += 1) {
    const strip = box(left, mats.purpleFabric, [0.055, 2.28, 0.32], [-0.03, 1.38, -1.96 + i * 0.34], "left curtain fold");
    strip.rotation.y = Math.sin(i) * 0.05;
  }
  for (let i = 0; i < 5; i += 1) {
    const strip = box(right, mats.bedBase, [0.055, 2.28, 0.32], [-0.03, 1.38, 0.64 + i * 0.34], "right curtain fold");
    strip.rotation.y = Math.sin(i + 1) * 0.05;
  }
  box(left, mats.neonPink, [0.035, 2.26, 0.05], [-0.08, 1.37, -1.1], "curtain led seam");
  box(right, mats.neonCyan, [0.035, 2.26, 0.05], [-0.08, 1.37, 1.48], "curtain led seam");

  let open = false;
  makeInfo(
    group,
    catalog.curtain,
    () => {
      const leftFrom = left.position.z;
      const rightFrom = right.position.z;
      const leftTo = open ? 0 : -1.05;
      const rightTo = open ? 0 : 1.05;
      open = !open;
      animator.add(0.78, (v) => {
        left.position.z = THREE.MathUtils.lerp(leftFrom, leftTo, v);
        right.position.z = THREE.MathUtils.lerp(rightFrom, rightTo, v);
      });
      return open ? "Rèm đã kéo sang hai bên" : "Rèm đã đóng";
    },
    interactives
  );
};

const createSofaDining = (scene, mats, animator, interactives) => {
  const group = new THREE.Group();
  group.name = "sofa corner";
  group.position.set(2.55, 0, -0.45);
  scene.add(group);

  box(group, mats.carpet, [5.4, 0.045, 2.9], [0.5, 0.028, 0.42], "large patterned rug");
  box(group, mats.charcoal, [1.65, 0.42, 0.62], [-0.55, 0.36, -0.18], "sofa seat");
  box(group, mats.charcoal, [1.65, 0.78, 0.18], [-0.55, 0.72, -0.55], "sofa back");
  box(group, mats.graphite, [0.18, 0.48, 0.62], [-1.48, 0.42, -0.18], "sofa arm left");
  box(group, mats.graphite, [0.18, 0.48, 0.62], [0.38, 0.42, -0.18], "sofa arm right");
  box(group, mats.neonPink, [1.2, 0.045, 0.05], [-0.55, 0.88, -0.45], "sofa led");
  box(group, mats.blue, [0.42, 0.16, 0.36], [-0.92, 0.67, -0.16], "blue cushion");
  box(group, mats.yellow, [0.42, 0.16, 0.36], [-0.23, 0.67, -0.16], "yellow cushion");
  box(group, mats.white, [0.5, 0.13, 0.34], [0.18, 0.68, -0.16], "white cushion");

  const table = new THREE.Group();
  table.position.set(0.9, 0, 0.55);
  box(table, mats.woodDark, [1.08, 0.09, 0.68], [0, 0.51, 0], "coffee table top");
  box(table, mats.chrome, [0.06, 0.46, 0.06], [-0.42, 0.25, -0.24], "table leg");
  box(table, mats.chrome, [0.06, 0.46, 0.06], [0.42, 0.25, -0.24], "table leg");
  box(table, mats.chrome, [0.06, 0.46, 0.06], [-0.42, 0.25, 0.24], "table leg");
  box(table, mats.chrome, [0.06, 0.46, 0.06], [0.42, 0.25, 0.24], "table leg");
  cyl(table, mats.white, 0.12, 0.09, 0.13, [-0.22, 0.64, -0.08], [0, 0, 0], 28, "cup");
  box(table, mats.green, [0.3, 0.05, 0.22], [0.24, 0.62, 0.12], "book");
  group.add(table);

  makeInfo(group, catalog.sofa, null, interactives);

  const dining = new THREE.Group();
  dining.name = "folding dining table";
  dining.position.set(5.65, 0, -1.0);
  scene.add(dining);
  box(dining, mats.woodDark, [1.05, 0.08, 0.74], [0, 0.73, 0], "fold table center");
  const wing = new THREE.Group();
  box(wing, mats.woodDark, [0.78, 0.07, 0.74], [0.39, 0.73, 0], "fold table wing");
  wing.position.x = 0.54;
  dining.add(wing);
  box(dining, mats.chrome, [0.05, 0.72, 0.05], [-0.44, 0.36, -0.28], "fold table leg");
  box(dining, mats.chrome, [0.05, 0.72, 0.05], [-0.44, 0.36, 0.28], "fold table leg");
  box(dining, mats.chrome, [0.05, 0.72, 0.05], [0.44, 0.36, -0.28], "fold table leg");
  box(dining, mats.chrome, [0.05, 0.72, 0.05], [0.44, 0.36, 0.28], "fold table leg");
  box(dining, mats.charcoal, [0.45, 0.1, 0.45], [-0.9, 0.42, 0.05], "dining stool");
  box(dining, mats.charcoal, [0.45, 0.1, 0.45], [0.95, 0.42, 0.05], "dining stool");

  let open = false;
  makeInfo(
    dining,
    catalog.dining,
    () => {
      const from = wing.rotation.z;
      const to = open ? 0 : -Math.PI / 2.2;
      open = !open;
      animator.add(0.58, (v) => {
        wing.rotation.z = THREE.MathUtils.lerp(from, to, v);
      });
      return open ? "Cánh bàn đã gập xuống gọn" : "Cánh bàn đã mở rộng";
    },
    interactives
  );
};

const createSoftDecor = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "soft decor";
  scene.add(group);

  const lounge = new THREE.Group();
  lounge.name = "floor lounge mattress";
  lounge.position.set(5.25, 0, 0.95);
  lounge.rotation.y = -0.22;
  box(lounge, mats.mattress, [1.55, 0.2, 0.86], [0, 0.18, 0], "floor mattress");
  box(lounge, mats.blanket, [1.52, 0.08, 0.34], [0, 0.33, 0.22], "folded throw blanket");
  box(lounge, mats.white, [0.54, 0.13, 0.32], [-0.42, 0.39, -0.2], "floor pillow white");
  box(lounge, mats.blue, [0.48, 0.12, 0.3], [0.24, 0.38, -0.2], "floor pillow blue");
  group.add(lounge);
  makeInfo(
    lounge,
    {
      name: "Nệm thư giãn + gối sàn",
      price: "2.900.000 vnd",
      use: "Khu nằm đọc sách/chill nhanh cạnh ban công, làm phòng đỡ trống và mềm hơn."
    },
    null,
    interactives
  );

  const lamp = new THREE.Group();
  lamp.name = "warm floor lamp";
  lamp.position.set(4.55, 0, -2.35);
  cyl(lamp, mats.black, 0.055, 0.055, 1.05, [0, 0.72, 0], [0, 0, 0], 18, "lamp stem");
  cyl(lamp, mats.black, 0.24, 0.16, 0.32, [0, 1.35, 0], [0, 0, 0], 28, "lamp shade");
  sphere(lamp, mats.yellow, 0.12, [0, 1.27, 0], [1, 0.85, 1], "warm bulb");
  group.add(lamp);
  makeInfo(
    lamp,
    {
      name: "Đèn cây ánh sáng ấm",
      price: "1.450.000 vnd",
      use: "Tăng sáng cho góc sofa và tạo cảm giác phòng thật hơn vào buổi tối."
    },
    null,
    interactives
  );

  const art = new THREE.Group();
  art.name = "abstract wall art";
  art.position.set(-1.1, 1.92, -4.0);
  box(art, mats.white, [1.85, 1.0, 0.05], [0, 0, 0], "canvas base");
  box(art, mats.green, [0.72, 0.38, 0.06], [0.38, 0.05, 0.04], "green paint block");
  box(art, mats.yellow, [0.58, 0.24, 0.06], [-0.3, 0.27, 0.05], "yellow paint block");
  box(art, mats.black, [0.72, 0.16, 0.06], [0.02, -0.2, 0.06], "black brush stroke");
  box(art, mats.red, [0.34, 0.18, 0.06], [0.44, -0.34, 0.06], "red paint accent");
  group.add(art);
  makeInfo(
    art,
    {
      name: "Tranh canvas trừu tượng",
      price: "1.250.000 vnd",
      use: "Mảng trang trí sáng giống ảnh mẫu, cân bằng lại LED gaming trong phòng."
    },
    null,
    interactives
  );

  const plants = new THREE.Group();
  plants.name = "decor plants";
  group.add(plants);
  createFloorPlant(plants, mats, [-2.2, 0, -2.7], 1.05, "plant near tv");
  createFloorPlant(plants, mats, [5.95, 0, -2.15], 0.95, "plant near window");
  createFloorPlant(plants, mats, [6.45, 0, 2.1], 0.75, "small balcony plant");
  makeInfo(
    plants,
    {
      name: "Cây xanh trang trí",
      price: "2.200.000 vnd",
      use: "Làm phòng sáng và thật hơn, lấy cảm hứng từ cây trong ảnh thiết kế."
    },
    null,
    interactives
  );
};

const createBedAndStairs = (scene, mats, animator, interactives) => {
  const bed = new THREE.Group();
  bed.name = "loft bed";
  bed.position.set(-0.65, 0, 2.7);
  scene.add(bed);

  box(bed, mats.bedBase, [3.35, 0.22, 2.26], [0, 2.05, 0], "loft platform");
  for (const x of [-1.64, 1.64]) {
    for (const z of [-1.05, 1.05]) {
      box(bed, mats.woodDark, [0.13, 2.1, 0.13], [x, 1.05, z], "loft bed structural post");
    }
  }
  box(bed, mats.warmWood, [3.48, 0.12, 0.12], [0, 1.92, 1.13], "rear loft support beam");
  box(bed, mats.warmWood, [0.12, 0.12, 2.18], [-1.72, 1.92, 0], "left loft support beam");
  box(bed, mats.warmWood, [0.12, 0.12, 2.18], [1.72, 1.92, 0], "right loft support beam");
  box(bed, mats.mattress, [3.12, 0.32, 1.88], [0, 2.35, -0.05], "mattress");
  box(bed, mats.blanket, [1.72, 0.18, 1.78], [0.42, 2.56, -0.04], "blanket");
  box(bed, mats.white, [0.7, 0.18, 0.46], [-1.0, 2.58, -0.56], "pillow");
  box(bed, mats.white, [0.7, 0.18, 0.46], [-1.0, 2.58, 0.32], "pillow");
  box(bed, mats.chrome, [3.45, 0.08, 0.08], [0, 2.68, -1.13], "bed front rail");
  box(bed, mats.chrome, [0.08, 0.76, 0.08], [-1.72, 2.42, -1.13], "bed rail post");
  box(bed, mats.chrome, [0.08, 0.76, 0.08], [1.72, 2.42, -1.13], "bed rail post");
  makeLedStrip(bed, mats.neonViolet, [-1.62, 2.18, -1.11], [1.62, 2.18, -1.11], 0.045);

  const secret = new THREE.Group();
  secret.name = "secret under bed";
  secret.position.set(0, 0, 1.18);
  box(secret, mats.charcoal, [2.85, 1.42, 0.12], [0, 0.83, -1.03], "secret sliding door");
  box(secret, mats.neonGreen, [1.8, 0.035, 0.045], [0, 1.38, -1.1], "secret led line");
  box(secret, mats.graphite, [1.0, 0.62, 0.8], [-0.82, 0.38, -0.18], "storage box");
  box(secret, mats.black, [0.7, 0.54, 0.62], [0.58, 0.35, -0.1], "pc spare tower");
  bed.add(secret);

  let secretOpen = false;
  makeInfo(bed, catalog.bed, null, interactives);
  makeInfo(
    secret,
    catalog.secretCabinet,
    () => {
      const from = secret.position.x;
      const to = secretOpen ? 0 : 1.75;
      secretOpen = !secretOpen;
      animator.add(0.66, (v) => {
        secret.position.x = THREE.MathUtils.lerp(from, to, v);
      });
      return secretOpen ? "Kho dưới giường đã mở" : "Kho dưới giường đã đóng";
    },
    interactives
  );

  const underCabinet = new THREE.Group();
  underCabinet.name = "under bed wardrobe cabinet";
  box(underCabinet, mats.cabinetInterior, [3.08, 1.5, 0.08], [0, 0.84, 0.96], "cabinet back panel");
  box(underCabinet, mats.warmWood, [0.08, 1.54, 2.06], [-1.55, 0.84, -0.02], "cabinet left side");
  box(underCabinet, mats.warmWood, [0.08, 1.54, 2.06], [1.55, 0.84, -0.02], "cabinet right side");
  box(underCabinet, mats.warmWood, [3.16, 0.08, 2.06], [0, 0.1, -0.02], "cabinet plinth");
  box(underCabinet, mats.warmWood, [3.16, 0.08, 2.06], [0, 1.58, -0.02], "cabinet upper beam");
  box(underCabinet, mats.warmWood, [0.06, 1.42, 1.92], [-0.42, 0.86, -0.02], "cabinet vertical divider");
  box(underCabinet, mats.warmWood, [0.06, 1.42, 1.92], [0.68, 0.86, -0.02], "cabinet vertical divider");
  box(underCabinet, mats.cabinetInterior, [0.98, 0.06, 1.78], [-1.0, 0.62, -0.02], "folded clothes shelf");
  box(underCabinet, mats.cabinetInterior, [0.8, 0.06, 1.78], [1.08, 0.92, -0.02], "accessory shelf");
  cyl(underCabinet, mats.chrome, 0.025, 0.025, 0.96, [0.13, 1.32, -0.1], [0, 0, Math.PI / 2], 16, "wardrobe hanging rail");
  const shirtMats = [mats.blue, mats.white, mats.neonViolet, mats.green, mats.yellow];
  for (let i = 0; i < shirtMats.length; i += 1) {
    const x = -0.24 + i * 0.19;
    box(underCabinet, shirtMats[i], [0.12, 0.58, 0.34], [x, 0.94, -0.22], "hanging shirt");
    cyl(underCabinet, mats.chrome, 0.025, 0.025, 0.14, [x, 1.26, -0.22], [Math.PI / 2, 0, 0], 8, "shirt hanger");
  }
  box(underCabinet, mats.graphite, [0.68, 0.34, 0.52], [-1.02, 0.34, -0.42], "storage fabric bin");
  box(underCabinet, mats.cream, [0.7, 0.18, 0.44], [-1.02, 0.78, 0.36], "folded blanket stack");
  box(underCabinet, mats.black, [0.56, 0.3, 0.48], [1.08, 0.36, -0.48], "gaming gear box");
  sphere(underCabinet, mats.black, 0.12, [1.0, 0.24, 0.48], [1.65, 0.42, 0.75], "left shoe pair");
  sphere(underCabinet, mats.white, 0.12, [1.25, 0.24, 0.48], [1.65, 0.42, 0.75], "right shoe pair");

  const leftCabinetDoor = new THREE.Group();
  leftCabinetDoor.name = "left sliding wardrobe door";
  box(leftCabinetDoor, mats.blueGlass, [1.48, 1.36, 0.08], [-0.76, 0.86, -1.03], "left smoked glass door");
  box(leftCabinetDoor, mats.chrome, [0.03, 1.05, 0.04], [-0.12, 0.86, -1.09], "left vertical pull");
  underCabinet.add(leftCabinetDoor);

  const rightCabinetDoor = new THREE.Group();
  rightCabinetDoor.name = "right sliding wardrobe door";
  box(rightCabinetDoor, mats.blueGlass, [1.48, 1.36, 0.08], [0.76, 0.86, -1.0], "right smoked glass door");
  box(rightCabinetDoor, mats.chrome, [0.03, 1.05, 0.04], [0.12, 0.86, -1.06], "right vertical pull");
  underCabinet.add(rightCabinetDoor);
  box(underCabinet, mats.neonGreen, [2.85, 0.035, 0.045], [0, 1.42, -1.11], "under bed wardrobe led line");
  bed.add(underCabinet);

  let cabinetOpen = false;
  makeInfo(
    underCabinet,
    catalog.wardrobe,
    () => {
      const leftFrom = leftCabinetDoor.position.x;
      const rightFrom = rightCabinetDoor.position.x;
      const leftTo = cabinetOpen ? 0 : -0.72;
      const rightTo = cabinetOpen ? 0 : 0.72;
      cabinetOpen = !cabinetOpen;
      animator.add(0.66, (v) => {
        leftCabinetDoor.position.x = THREE.MathUtils.lerp(leftFrom, leftTo, v);
        rightCabinetDoor.position.x = THREE.MathUtils.lerp(rightFrom, rightTo, v);
      });
      return cabinetOpen ? "Tủ dưới giường đã mở" : "Tủ dưới giường đã đóng";
    },
    interactives
  );

  const stairs = new THREE.Group();
  stairs.name = "storage stairs";
  stairs.position.set(2.0, 0, 2.7);
  scene.add(stairs);
  const stepCount = 5;
  for (let i = 0; i < stepCount; i += 1) {
    const stepGroup = new THREE.Group();
    stepGroup.name = `drawer stair ${i + 1}`;
    const y = 0.22 + i * 0.36;
    const z = 0.82 - i * 0.38;
    box(stepGroup, mats.woodDark, [0.84, 0.34, 0.58], [0, y, z], "stair shell");
    const drawer = new THREE.Group();
    drawer.name = `step drawer ${i + 1}`;
    box(drawer, mats.bedBase, [0.77, 0.25, 0.08], [0.02, y, z - 0.31], "drawer face");
    box(drawer, mats.chrome, [0.3, 0.025, 0.025], [0.02, y + 0.02, z - 0.36], "drawer pull");
    box(drawer, mats.graphite, [0.66, 0.2, 0.38], [0.02, y - 0.01, z - 0.14], "drawer box");
    stepGroup.add(drawer);
    stairs.add(stepGroup);

    let open = false;
    makeInfo(
      stepGroup,
      catalog.stairDrawer,
      () => {
        const from = drawer.position.z;
        const to = open ? 0 : -0.55;
        open = !open;
        animator.add(0.48, (v) => {
          drawer.position.z = THREE.MathUtils.lerp(from, to, v);
        });
        return open ? `Hộc bậc ${i + 1} đã kéo ra` : `Hộc bậc ${i + 1} đã đóng`;
      },
      interactives
    );
  }
  box(stairs, mats.chrome, [0.06, 2.05, 0.06], [0.55, 1.2, -0.36], "stair rail post");
  box(stairs, mats.chrome, [0.06, 1.8, 0.06], [0.55, 1.1, 0.88], "stair rail post");
  const handrail = box(stairs, mats.chrome, [0.07, 0.07, 1.55], [0.55, 1.82, 0.26], "stair handrail");
  handrail.rotation.x = 0.35;
};

const createWardrobe = (scene, mats, animator, interactives) => {
  const group = new THREE.Group();
  group.name = "wardrobe";
  group.position.set(8.55, 0, 1.75);
  scene.add(group);

  box(group, mats.woodDark, [1.08, 2.48, 2.4], [0, 1.24, 0], "wardrobe body");
  box(group, mats.black, [1.02, 0.07, 2.22], [0, 2.36, 0], "wardrobe top");
  box(group, mats.neonCyan, [0.04, 2.16, 0.04], [-0.55, 1.25, -1.05], "wardrobe led");
  box(group, mats.neonPink, [0.04, 2.16, 0.04], [-0.55, 1.25, 1.05], "wardrobe led");

  const interior = new THREE.Group();
  interior.name = "wardrobe interior";
  box(interior, mats.cream, [0.86, 0.08, 2.08], [-0.04, 0.72, 0], "shelf low");
  box(interior, mats.cream, [0.86, 0.08, 2.08], [-0.04, 1.55, 0], "shelf mid");
  cyl(interior, mats.chrome, 0.025, 0.025, 1.85, [-0.09, 1.92, 0], [Math.PI / 2, 0, 0], 16, "clothes rail");
  const colors = [mats.red, mats.blue, mats.green, mats.yellow, mats.neonViolet, mats.white];
  for (let i = 0; i < 6; i += 1) {
    const z = -0.78 + i * 0.31;
    box(interior, colors[i], [0.08, 0.66, 0.24], [-0.1, 1.63, z], "hanging clothes");
    cyl(interior, mats.chrome, 0.035, 0.035, 0.16, [-0.1, 1.99, z], [Math.PI / 2, 0, 0], 8, "hanger");
  }
  box(interior, mats.graphite, [0.46, 0.3, 0.7], [-0.1, 0.34, -0.62], "backpack");
  box(interior, mats.black, [0.46, 0.24, 0.58], [-0.1, 0.32, 0.55], "accessory box");
  group.add(interior);

  const leftDoor = new THREE.Group();
  leftDoor.position.set(-0.58, 0, -1.12);
  box(leftDoor, mats.blueGlass, [0.05, 2.16, 1.08], [0, 1.24, 0.54], "left glass wardrobe door");
  group.add(leftDoor);

  const rightDoor = new THREE.Group();
  rightDoor.position.set(-0.58, 0, 1.12);
  box(rightDoor, mats.blueGlass, [0.05, 2.16, 1.08], [0, 1.24, -0.54], "right glass wardrobe door");
  group.add(rightDoor);

  let open = false;
  makeInfo(
    group,
    catalog.wardrobe,
    () => {
      const leftFrom = leftDoor.rotation.y;
      const rightFrom = rightDoor.rotation.y;
      const leftTo = open ? 0 : -Math.PI * 0.55;
      const rightTo = open ? 0 : Math.PI * 0.55;
      open = !open;
      animator.add(0.72, (v) => {
        leftDoor.rotation.y = THREE.MathUtils.lerp(leftFrom, leftTo, v);
        rightDoor.rotation.y = THREE.MathUtils.lerp(rightFrom, rightTo, v);
      });
      return open ? "Tủ quần áo đã mở" : "Tủ quần áo đã đóng";
    },
    interactives
  );
};

const createDesk = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "gaming desk";
  group.position.set(5.85, 0, 2.55);
  group.rotation.y = -Math.PI / 2;
  scene.add(group);

  box(group, mats.woodDark, [2.22, 0.12, 0.75], [0, 0.78, 0], "desk top");
  box(group, mats.charcoal, [0.22, 0.76, 0.68], [-0.9, 0.39, 0], "desk drawer block");
  box(group, mats.chrome, [0.07, 0.76, 0.07], [0.9, 0.39, -0.28], "desk leg");
  box(group, mats.chrome, [0.07, 0.76, 0.07], [0.9, 0.39, 0.28], "desk leg");
  box(group, mats.black, [0.88, 0.56, 0.06], [-0.46, 1.17, -0.24], "left monitor");
  box(group, mats.black, [0.88, 0.56, 0.06], [0.5, 1.17, -0.24], "right monitor");
  box(group, mats.neonCyan, [0.72, 0.035, 0.03], [-0.46, 1.39, -0.2], "monitor glow");
  box(group, mats.neonPink, [0.72, 0.035, 0.03], [0.5, 0.95, -0.2], "monitor glow");
  box(group, mats.black, [0.86, 0.05, 0.22], [0.04, 0.87, 0.16], "keyboard");
  for (let i = 0; i < 8; i += 1) {
    box(group, i % 2 ? mats.neonCyan : mats.neonPink, [0.055, 0.018, 0.055], [-0.28 + i * 0.08, 0.91, 0.16], "rgb keyboard key");
  }
  sphere(group, mats.neonGreen, 0.13, [0.72, 0.89, 0.18], [1.25, 0.42, 0.86], "rgb mouse");
  cyl(group, mats.soil, 0.09, 0.07, 0.12, [-0.86, 0.9, 0.22], [0, 0, 0], 18, "desk mini plant pot");
  sphere(group, mats.plant, 0.16, [-0.86, 1.06, 0.22], [0.8, 1.15, 0.8], "desk mini plant");
  cyl(group, mats.chrome, 0.025, 0.025, 0.42, [-1.02, 1.02, -0.08], [0, 0, 0], 16, "desk lamp stem");
  cyl(group, mats.yellow, 0.11, 0.07, 0.16, [-1.02, 1.28, -0.08], [0, 0, 0], 20, "desk lamp shade");
  box(group, mats.black, [0.48, 0.92, 0.64], [1.32, 0.58, 0.02], "pc case");
  box(group, mats.blueGlass, [0.04, 0.76, 0.52], [1.07, 0.6, 0.02], "pc glass side");
  cyl(group, mats.neonCyan, 0.11, 0.11, 0.035, [1.04, 0.75, -0.16], [Math.PI / 2, 0, 0], 32, "pc fan");
  cyl(group, mats.neonPink, 0.11, 0.11, 0.035, [1.04, 0.45, -0.16], [Math.PI / 2, 0, 0], 32, "pc fan");
  makeLedStrip(group, mats.neonCyan, [-1.0, 0.86, 0.42], [1.1, 0.86, 0.42], 0.035);
  makeLedStrip(group, mats.neonPink, [1.08, 0.25, 0.42], [1.08, 0.86, 0.42], 0.035);

  const chair = new THREE.Group();
  chair.position.set(0.1, 0, 1.0);
  box(chair, mats.charcoal, [0.64, 0.18, 0.62], [0, 0.55, 0], "chair seat");
  box(chair, mats.black, [0.7, 1.05, 0.18], [0, 1.08, 0.34], "chair back");
  box(chair, mats.neonViolet, [0.5, 0.05, 0.035], [0, 1.46, 0.25], "chair led");
  cyl(chair, mats.chrome, 0.05, 0.05, 0.55, [0, 0.28, 0], [0, 0, 0], 16, "chair gas lift");
  for (let i = 0; i < 5; i += 1) {
    const leg = box(chair, mats.chrome, [0.06, 0.05, 0.54], [0, 0.14, 0], "chair base leg");
    leg.rotation.y = (i / 5) * TAU;
  }
  group.add(chair);

  makeInfo(group, catalog.desk, null, interactives);
  makeInfo(chair, catalog.chair, null, interactives);
};

const createBathroom = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "bathroom";
  group.position.set(-5.2, 0, 2.9);
  scene.add(group);

  box(group, mats.glass, [1.22, 2.18, 0.08], [-0.9, 1.12, -0.67], "shower glass front");
  box(group, mats.glass, [0.08, 2.18, 1.18], [-1.48, 1.12, -0.1], "shower glass side");
  cyl(group, mats.chrome, 0.06, 0.06, 0.08, [-1.1, 1.98, -0.66], [Math.PI / 2, 0, 0], 28, "shower head");
  box(group, mats.chrome, [0.045, 1.0, 0.045], [-1.1, 1.42, -0.66], "shower pipe");
  cyl(group, mats.white, 0.27, 0.32, 0.32, [0.76, 0.32, 0.54], [0, 0, 0], 32, "toilet bowl");
  box(group, mats.white, [0.46, 0.66, 0.18], [0.76, 0.75, 0.86], "toilet tank");
  cyl(group, mats.white, 0.3, 0.26, 0.16, [0.22, 0.78, -0.64], [0, 0, 0], 32, "sink bowl");
  box(group, mats.white, [0.56, 0.12, 0.42], [0.22, 0.86, -0.64], "sink counter");
  box(group, mats.mirror, [0.62, 0.78, 0.035], [0.22, 1.45, -0.94], "mirror");
  box(group, mats.neonCyan, [0.7, 0.035, 0.035], [0.22, 1.9, -0.91], "mirror led");
  cyl(group, mats.chrome, 0.035, 0.035, 0.2, [0.22, 1.04, -0.66], [Math.PI / 2, 0, 0], 16, "faucet");

  makeInfo(group, catalog.bathroom, null, interactives);
};

const createWasher = (scene, mats, animator, interactives, animated) => {
  const group = new THREE.Group();
  group.name = "washing machine";
  group.position.set(8.2, 0, 2.62);
  group.rotation.y = Math.PI / 2;
  scene.add(group);

  box(group, mats.whitePlastic, [0.92, 0.98, 0.78], [0, 0.49, 0], "washer body");
  box(group, mats.graphite, [0.68, 0.16, 0.06], [0, 0.82, -0.37], "washer control panel");
  const door = cyl(group, mats.black, 0.28, 0.28, 0.08, [0, 0.47, -0.39], [Math.PI / 2, 0, 0], 40, "washer door ring");
  const drum = cyl(group, mats.blueGlass, 0.22, 0.22, 0.09, [0, 0.47, -0.43], [Math.PI / 2, 0, 0], 40, "washer glass drum");
  box(group, mats.neonGreen, [0.12, 0.045, 0.035], [0.22, 0.82, -0.42], "washer status led");
  box(group, mats.chrome, [0.75, 0.035, 0.035], [0, 1.0, -0.22], "washer top trim");
  cyl(group, mats.chrome, 0.028, 0.028, 0.72, [-0.56, 0.78, 0.18], [0, 0, Math.PI / 2], 16, "washer water pipe");
  box(group, mats.blue, [0.18, 0.28, 0.14], [0.38, 1.14, 0.02], "detergent bottle");
  door.receiveShadow = false;
  drum.receiveShadow = false;

  let on = false;
  makeInfo(
    group,
    catalog.washer,
    () => {
      on = !on;
      animated.washerRunning = on;
      animator.add(0.38, (v) => {
        const scale = THREE.MathUtils.lerp(on ? 0.8 : 1.15, on ? 1.15 : 0.8, v);
        group.scale.setScalar(scale);
      }, () => {
        group.scale.setScalar(1);
      });
      return on ? "Máy giặt đang quay" : "Máy giặt đã dừng";
    },
    interactives
  );

  animated.washerDrum = drum;
};

const createBalcony = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "drying balcony";
  group.position.set(8.9, 0, -0.6);
  scene.add(group);

  box(group, mats.glass, [2.6, 1.05, 0.08], [0, 0.86, -2.54], "balcony glass rail");
  box(group, mats.chrome, [2.65, 0.08, 0.08], [0, 1.42, -2.54], "balcony top rail");
  box(group, mats.chrome, [0.05, 1.36, 0.05], [-1.12, 0.76, -2.54], "balcony post");
  box(group, mats.chrome, [0.05, 1.36, 0.05], [1.12, 0.76, -2.54], "balcony post");

  const rack = new THREE.Group();
  rack.position.set(0.1, 0, -1.28);
  cyl(rack, mats.chrome, 0.035, 0.035, 2.0, [0, 1.55, 0], [Math.PI / 2, 0, 0], 16, "drying rod");
  box(rack, mats.chrome, [0.04, 1.1, 0.04], [-0.92, 0.92, -0.82], "drying stand");
  box(rack, mats.chrome, [0.04, 1.1, 0.04], [0.92, 0.92, 0.82], "drying stand");
  const clothMats = [mats.red, mats.blue, mats.green, mats.white, mats.yellow];
  for (let i = 0; i < 5; i += 1) {
    const z = -0.74 + i * 0.37;
    box(rack, clothMats[i], [0.05, 0.72 - i * 0.04, 0.28], [0, 1.18, z], "hanging laundry");
  }
  group.add(rack);

  cyl(group, mats.soil, 0.22, 0.18, 0.24, [0.95, 0.12, 1.52], [0, 0, 0], 22, "plant pot");
  sphere(group, mats.plant, 0.28, [0.95, 0.48, 1.52], [0.8, 1.15, 0.8], "balcony plant");
  box(group, mats.graphite, [0.7, 0.86, 0.42], [-0.88, 0.43, 1.34], "laundry basket");

  makeInfo(group, catalog.balconyDry, null, interactives);
};

const createShoeRack = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "shoe rack";
  group.position.set(-7.08, 0, -2.2);
  scene.add(group);

  box(group, mats.woodDark, [0.62, 1.1, 1.12], [0, 0.55, 0], "shoe rack body");
  for (let i = 0; i < 3; i += 1) {
    box(group, mats.cream, [0.55, 0.04, 1.02], [0.02, 0.25 + i * 0.32, 0], "shoe shelf");
  }
  const shoeColors = [mats.black, mats.white, mats.red, mats.blue, mats.charcoal, mats.yellow];
  for (let i = 0; i < 6; i += 1) {
    const row = Math.floor(i / 2);
    const z = i % 2 ? 0.25 : -0.25;
    sphere(group, shoeColors[i], 0.12, [0.0, 0.16 + row * 0.32, z], [1.5, 0.42, 0.68], "pair of shoes");
  }
  box(group, mats.black, [0.48, 0.28, 0.38], [0.04, 1.24, -0.22], "helmet");
  box(group, mats.chrome, [0.38, 0.04, 0.04], [0.04, 1.08, 0.28], "key tray");
  makeInfo(group, catalog.shoeRack, null, interactives);
};

const createTallShelf = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "tall shelf";
  group.position.set(6.85, 0, -3.24);
  scene.add(group);

  box(group, mats.woodDark, [1.2, 2.1, 0.42], [0, 1.05, 0], "tall shelf frame");
  for (let i = 0; i < 5; i += 1) {
    box(group, mats.cream, [1.05, 0.05, 0.38], [0, 0.28 + i * 0.38, 0], "shelf plank");
  }
  for (let i = 0; i < 10; i += 1) {
    const x = -0.44 + (i % 5) * 0.22;
    const y = 0.38 + Math.floor(i / 5) * 0.74;
    box(group, i % 3 === 0 ? mats.neonViolet : i % 3 === 1 ? mats.blue : mats.yellow, [0.12, 0.34, 0.24], [x, y, -0.05], "books and game boxes");
  }
  sphere(group, mats.neonCyan, 0.15, [0.36, 1.78, -0.04], [1, 1, 1], "collectible orb");
  box(group, mats.black, [0.48, 0.22, 0.32], [-0.28, 1.78, -0.02], "router");
  makeInfo(group, catalog.shelf, null, interactives);
};

const createRgbCables = (scene, mats, interactives) => {
  const group = new THREE.Group();
  group.name = "rgb strips and cables";
  scene.add(group);

  makeLedStrip(group, mats.neonCyan, [4.2, 1.0, 3.55], [6.2, 1.0, 3.55], 0.03);
  makeLedStrip(group, mats.neonPink, [6.2, 1.0, 3.55], [6.2, 1.95, 3.55], 0.03);
  makeLedStrip(group, mats.neonGreen, [-1.9, 2.12, 1.49], [1.0, 2.12, 1.49], 0.03);

  const cableMat = new THREE.LineBasicMaterial({ color: "#22d3ee", transparent: true, opacity: 0.85 });
  const points = [
    new THREE.Vector3(4.36, 0.83, 3.34),
    new THREE.Vector3(4.8, 0.64, 3.16),
    new THREE.Vector3(5.28, 0.8, 3.36),
    new THREE.Vector3(5.76, 0.64, 3.12),
    new THREE.Vector3(6.18, 0.82, 3.34)
  ];
  const curve = new THREE.CatmullRomCurve3(points);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.015, 8, false), mats.neonCyan);
  tube.name = "rgb cable tube";
  group.add(tube);

  makeInfo(group, catalog.rgb, null, interactives);
};

const createLighting = (scene) => {
  scene.add(new THREE.HemisphereLight("#ffffff", "#d9c0ad", 1.65));
  scene.add(new THREE.AmbientLight("#ffffff", 0.48));

  const sun = new THREE.DirectionalLight("#fff8e7", 3.55);
  sun.position.set(-5, 7.6, 5.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -11;
  sun.shadow.camera.right = 11;
  sun.shadow.camera.top = 8;
  sun.shadow.camera.bottom = -8;
  scene.add(sun);

  const cyan = new THREE.PointLight("#22d3ee", 1.2, 8, 1.6);
  cyan.position.set(4.5, 2.2, 3.25);
  scene.add(cyan);

  const magenta = new THREE.PointLight("#f472b6", 0.95, 7, 1.8);
  magenta.position.set(-0.3, 2.5, 2.1);
  scene.add(magenta);

  const green = new THREE.PointLight("#22c55e", 0.65, 5.4, 1.9);
  green.position.set(7.0, 2.1, -2.9);
  scene.add(green);
};

const disposeObject = (object) => {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => mat.dispose());
      } else {
        child.material.dispose();
      }
    }
  });
};

export const buildRoomScene = ({ mount, onHover, onFocus }) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.setClearColor("#f4f6fb", 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.28;
  mount.appendChild(renderer.domElement);
  renderer.domElement.tabIndex = 0;
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#f4f6fb");
  scene.fog = new THREE.FogExp2("#f4f6fb", 0.015);

  const camera = new THREE.PerspectiveCamera(62, mount.clientWidth / mount.clientHeight, 0.04, 80);
  const homePosition = new THREE.Vector3(-6.55, 1.55, -2.82);
  camera.position.copy(homePosition);
  let yaw = -2.04;
  let pitch = -0.18;

  const mats = createMaterials();
  const animator = new Animator();
  const interactives = [];
  const animated = {
    washerRunning: false,
    washerDrum: null,
    acRunning: false,
    acMist: null,
    acBlades: []
  };

  createLighting(scene);
  createRoomShell(scene, mats, interactives);
  createDoor(scene, mats, animator, interactives);
  createBathroomDoor(scene, mats, animator, interactives);
  createTvConsole(scene, mats, animator, interactives);
  createAc(scene, mats, animator, interactives, animated);
  createCurtain(scene, mats, animator, interactives);
  createSofaDining(scene, mats, animator, interactives);
  createSoftDecor(scene, mats, interactives);
  createBedAndStairs(scene, mats, animator, interactives);
  createDesk(scene, mats, interactives);
  createBathroom(scene, mats, interactives);
  createWasher(scene, mats, animator, interactives, animated);
  createBalcony(scene, mats, interactives);
  createShoeRack(scene, mats, interactives);
  createTallShelf(scene, mats, interactives);
  createRgbCables(scene, mats, interactives);

  const highlight = new THREE.BoxHelper(new THREE.Object3D(), "#22d3ee");
  highlight.material.transparent = true;
  highlight.material.opacity = 0.85;
  highlight.visible = false;
  scene.add(highlight);

  const raycaster = new THREE.Raycaster();
  raycaster.far = 7.2;
  const pointer = new THREE.Vector2(0, 0);
  const pointerPixels = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
  let hovered = null;
  let disposed = false;
  const keys = new Set();
  const movementCodes = new Set(["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "ShiftLeft", "ShiftRight"]);
  let dragging = false;
  let dragMoved = 0;
  let lastPointer = { x: 0, y: 0 };

  const applyView = () => {
    pitch = clamp(pitch, -1.16, 0.72);
    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
  };
  applyView();

  const updatePointer = (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    pointerPixels.x = event.clientX;
    pointerPixels.y = event.clientY;
  };

  const pick = () => {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactives, false);
    const target = hits.length ? hits[0].object.userData.hotspot : null;
    if (target !== hovered) {
      hovered = target;
      setHighlight(highlight, hovered);
      if (hovered?.userData.info) {
        onFocus?.(hovered.userData.info.name);
      } else {
        onFocus?.("Sẵn sàng");
      }
    }

    if (hovered?.userData.info) {
      const info = hovered.userData.info;
      const x = clamp(pointerPixels.x, 8, window.innerWidth - 360);
      const y = clamp(pointerPixels.y, 8, window.innerHeight - 180);
      onHover?.({
        x,
        y,
        name: info.name,
        price: info.price,
        use: info.use,
        action: info.action
      });
    } else {
      onHover?.(null);
    }
  };

  const onPointerMove = (event) => {
    updatePointer(event);
    if (dragging) {
      const dx = event.clientX - lastPointer.x;
      const dy = event.clientY - lastPointer.y;
      dragMoved += Math.abs(dx) + Math.abs(dy);
      yaw -= dx * 0.0042;
      pitch -= dy * 0.0034;
      applyView();
      lastPointer = { x: event.clientX, y: event.clientY };
    }
    pick();
  };

  const onPointerDown = (event) => {
    updatePointer(event);
    renderer.domElement.focus();
    dragging = true;
    dragMoved = 0;
    lastPointer = { x: event.clientX, y: event.clientY };
    renderer.domElement.setPointerCapture?.(event.pointerId);
    pick();
  };

  const onPointerUp = (event) => {
    updatePointer(event);
    renderer.domElement.releasePointerCapture?.(event.pointerId);
    dragging = false;
    pick();
    if (dragMoved < 8 && hovered?.userData.action) {
      const result = hovered.userData.action();
      if (result) onFocus?.(result);
    }
  };

  const onWheel = (event) => {
    camera.fov = clamp(camera.fov + Math.sign(event.deltaY) * 3, 38, 78);
    camera.updateProjectionMatrix();
  };

  const onKeyDown = (event) => {
    if (movementCodes.has(event.code)) event.preventDefault();
    keys.add(event.code);
  };

  const onKeyUp = (event) => {
    if (movementCodes.has(event.code)) event.preventDefault();
    keys.delete(event.code);
  };

  const resize = () => {
    if (!mount.clientWidth || !mount.clientHeight) return;
    camera.aspect = mount.clientWidth / mount.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
  };

  renderer.domElement.addEventListener("pointermove", onPointerMove);
  renderer.domElement.addEventListener("pointerdown", onPointerDown);
  renderer.domElement.addEventListener("pointerup", onPointerUp);
  renderer.domElement.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("resize", resize);

  const clock = new THREE.Clock();
  const moveVector = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const allowed = (x, z) => (x > -7.15 && x < 7.15 && z > -3.78 && z < 3.88) || (x > 7.15 && x < 9.9 && z > -2.25 && z < 3.3);

  const updateMovement = (delta) => {
    moveVector.set(0, 0, 0);
    forward.set(-Math.sin(yaw), 0, -Math.cos(yaw));
    right.set(Math.cos(yaw), 0, -Math.sin(yaw));

    if (keys.has("KeyW") || keys.has("ArrowUp")) moveVector.add(forward);
    if (keys.has("KeyS") || keys.has("ArrowDown")) moveVector.sub(forward);
    if (keys.has("KeyA") || keys.has("ArrowLeft")) moveVector.sub(right);
    if (keys.has("KeyD") || keys.has("ArrowRight")) moveVector.add(right);
    if (moveVector.lengthSq() > 0) {
      moveVector.normalize().multiplyScalar((keys.has("ShiftLeft") || keys.has("ShiftRight") ? 4.25 : 2.45) * delta);
      const nextX = camera.position.x + moveVector.x;
      const nextZ = camera.position.z + moveVector.z;
      if (allowed(nextX, camera.position.z)) camera.position.x = nextX;
      if (allowed(camera.position.x, nextZ)) camera.position.z = nextZ;
    }
    camera.position.y = 1.55;
  };

  const updateAnimatedObjects = (elapsed, delta) => {
    if (animated.washerRunning && animated.washerDrum) {
      animated.washerDrum.rotation.z += delta * 11;
      animated.washerDrum.material.opacity = 0.38 + Math.sin(elapsed * 9) * 0.08;
    }
    if (animated.acRunning) {
      animated.acBlades.forEach((blade, i) => {
        blade.rotation.x = -0.22 + Math.sin(elapsed * 8 + i * 0.45) * 0.24;
      });
      animated.acMist?.children.forEach((puff, i) => {
        puff.position.y -= delta * (0.14 + (i % 5) * 0.03);
        puff.position.z += delta * (0.42 + (i % 7) * 0.04);
        puff.position.x += Math.sin(elapsed * 1.8 + puff.userData.seed) * delta * 0.12;
        puff.material.opacity = 0.08 + Math.sin(elapsed * 2.6 + puff.userData.seed) * 0.045;
        if (puff.position.z > 1.6 || puff.position.y < -1.2) {
          puff.position.y = -0.46 - Math.random() * 0.18;
          puff.position.z = 0.36 + Math.random() * 0.18;
        }
      });
    }
  };

  let frameId = 0;
  const animate = () => {
    if (disposed) return;
    frameId = requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;
    animator.tick(delta);
    updateMovement(delta);
    updateAnimatedObjects(elapsed, delta);
    pick();
    renderer.render(scene, camera);
  };
  animate();

  return {
    resetView() {
      camera.position.copy(homePosition);
      yaw = -2.04;
      pitch = -0.18;
      camera.fov = 62;
      camera.updateProjectionMatrix();
      applyView();
      onFocus?.("Sẵn sàng");
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", resize);
      onHover?.(null);
      disposeObject(scene);
      mats.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    }
  };
};
