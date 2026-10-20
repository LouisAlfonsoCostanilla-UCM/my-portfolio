const $ = (s) => document.querySelector(s);
const logs = {
  home: {
    n: "PERSONNEL",
    title: "HOMEWORLD // CEBU",
    copy: "IDENTITY: Louis Alfonso M. Costanilla. Based in Cebu City, Philippines. Studying BS Information Technology at the University of Cebu. Current mission: understand how things work and learn to build them.",
    tags: ["CEBU CITY", "IT STUDENT"],
  },
  escape: {
    n: "RECREATION",
    title: "RECREATION // GAME WORLDS",
    copy: "OFF-DUTY LOG: Long-time gamer. I enjoy exploring new game worlds, taking on a challenge, and unwinding after class. Star Wars is another major part of my interests.",
    tags: ["GAMING", "NEW WORLDS"],
  },
  discover: {
    n: "EXPLORATION",
    title: "SURFACE EXPEDITIONS",
    copy: "SURFACE ACTIVITY: Hiking and night walks. I enjoy trails for the views and fresh air, preferably in cooler weather. After dark, a walk around the city is my way to reset.",
    tags: ["HIKING", "NIGHT WALKS"],
  },
};
document.querySelectorAll("[data-world]").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelectorAll("[data-world]").forEach((x) => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-pressed", x === b);
      });
      const l = logs[b.dataset.world];
      $("#log-no").textContent = l.n;
      $("#log-title").textContent = l.title;
      $("#log-copy").textContent = l.copy;
      $("#log-tags").replaceChildren(
        ...l.tags.map((t) => {
          let s = document.createElement("span");
          s.textContent = t;
          return s;
        }),
      );
    }),
);
$("#log-copy").setAttribute("aria-live", "polite");
const systems = {
  data: {
    symbol: "{ }",
    label: "DATA CORE / MYSQL",
    title: "RELATIONAL DATA CORE",
    copy: "MODULE: MySQL. Training includes table creation, SQL queries, primary keys, and foreign keys. Objective: organize information and connect related records.",
    code: "SELECT curiosity FROM everyday_life;",
  },
  network: {
    symbol: "⌁",
    label: "COMMUNICATIONS / PACKET TRACER",
    title: "NETWORK ROUTING ARRAY",
    copy: "MODULE: Cisco Packet Tracer. Training includes IP addressing, VLANs, routing, and troubleshooting. Objective: understand how devices communicate across a network.",
    code: "ping next_destination // keep exploring",
  },
  apps: {
    symbol: "</>",
    label: "BUILD SYSTEM / WINDOWS FORMS",
    title: "APPLICATION FABRICATOR",
    copy: "MODULE: Windows Forms. Training includes application interfaces and database connections. HCI directive: provide clear controls, useful feedback, and an interface people can understand.",
    code: "if (curious) { build(); learn(); repeat(); }",
  },
};
document.querySelectorAll("[data-system]").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelectorAll("[data-system]").forEach((x) => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-pressed", x === b);
      });
      const s = systems[b.dataset.system];
      for (let k of ["symbol", "label", "title", "copy", "code"])
        $("#system-" + k).textContent = s[k];
    }),
);
$("#system-copy").setAttribute("aria-live", "polite");
function tune() {
  const v = Number($("#tuner").value),
    d = Math.abs(v - 1037),
    locked = d <= 2;
  $("#frequency").textContent = (v / 10).toFixed(1);
  $(".receiver").classList.toggle("locked", locked);
  $("#quality").textContent = locked
    ? "SIGNAL LOCKED"
    : d < 25
      ? "SIGNAL DETECTED"
      : "NO LOCK";
  $("#direction").textContent = locked
    ? "CONNECTION ESTABLISHED"
    : v < 1037
      ? "SCAN HIGHER →"
      : "← SCAN LOWER";
  $("#message-label").textContent = locked
    ? "TRANSMISSION RECEIVED"
    : d < 25
      ? "DECODING…"
      : "SIGNAL LOST";
  $("#message").textContent = locked
    ? "“This is Louis, from Cebu, Earth. Still learning. Still exploring. You don’t need to have it all figured out to start your own expedition.”"
    : d < 25
      ? "… this is L… from C… [ signal unstable ] …"
      : "… … … [ awaiting a clear channel ] … … …";
  $("#wave").style.opacity = locked ? "1" : String(Math.max(0.15, 1 - d / 180));
}
$("#tuner").oninput = tune;
$("#auto-tune").onclick = () => {
  $("#tuner").value = "1037";
  tune();
};

const kyber = {
  blue: "#83c7ff",
  green: "#8be2ad",
  red: "#ff787a",
  purple: "#c99aff",
};
let selectedKyber = "blue",
  ignited = false;
function saberStatus() {
  $("#kyber-status").textContent =
    selectedKyber.toUpperCase() +
    " CRYSTAL / " +
    (ignited ? "BLADE ACTIVE" : "READY TO IGNITE");
}
document.querySelectorAll("[data-kyber]").forEach(
  (b) =>
    (b.onclick = () => {
      selectedKyber = b.dataset.kyber;
      document.documentElement.style.setProperty(
        "--kyber",
        kyber[selectedKyber],
      );
      document.querySelectorAll("[data-kyber]").forEach((x) => {
        x.classList.toggle("selected", x === b);
        x.setAttribute("aria-pressed", x === b);
      });
      saberStatus();
    }),
);
$("#ignite").onclick = () => {
  ignited = !ignited;
  $(".saber").classList.toggle("on", ignited);
  $("#ignite").setAttribute("aria-pressed", ignited);
  $("#ignite").innerHTML = ignited
    ? "RETRACT LIGHTSABER <span>−</span>"
    : "IGNITE LIGHTSABER <span>＋</span>";
  saberStatus();
};
$("#holocron-toggle").onclick = () => {
  const open = $("#archive-message").hidden;
  $("#archive-message").hidden = !open;
  $("#holocron-toggle").classList.toggle("open", open);
  $("#holocron-toggle").setAttribute("aria-expanded", open);
  $(".artifact-hint").textContent = open
    ? "PERSONAL ARCHIVE UNLOCKED / TAP TO CLOSE"
    : "TAP THE HOLOCRON TO OPEN THE ARCHIVE";
};
let jumpTimer;
$("#jump").onclick = () => {
  clearTimeout(jumpTimer);
  $("#hyperspace").classList.remove("engaged");
  requestAnimationFrame(() => {
    $("#hyperspace").classList.add("engaged");
    jumpTimer = setTimeout(
      () => {
        document
          .querySelector("#coordinates")
          .scrollIntoView({ behavior: "instant" });
        $("#hyperspace").classList.remove("engaged");
      },
      matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1100,
    );
  });
};
$("#scan-profile").onclick = () => {
  const open = $("#crew-details").hidden;
  $("#crew-details").hidden = !open;
  $("#scan-profile").setAttribute("aria-expanded", open);
  $("#scan-profile").textContent = open
    ? "PROFILE VERIFIED / CLOSE −"
    : "SCAN CREW PROFILE ⌕";
  $(".crew-photo").classList.remove("scanning");
  if (open)
    requestAnimationFrame(() => $(".crew-photo").classList.add("scanning"));
};
const droidAnswers = {
  student:
    "Louis studies BS Information Technology at the University of Cebu. His studies include databases, networking, app development, and human-computer interaction. Current mission: learn by building and practicing.",
  offduty:
    "He's been a gamer for years. Away from the screen, he enjoys hiking when the weather isn't too hot and heading out for night walks. Home base: Cebu City, Philippines.",
  starwars:
    "Louis loves the political side of Star Wars — the power struggles, governments, and choices behind the conflict. And he thinks Darth Vader is cool. His exact summary: 'It is political and Darth Vader is cool.'",
  skills:
    "He's practicing MySQL and SQL, Cisco Packet Tracer networking, and Windows Forms applications with databases. He's also learning HCI: making interfaces clear, useful, and easy to explore.",
};
function droidWelcome() {
  $("#terminal-history").innerHTML =
    '<p class="terminal-system">BOOT COMPLETE // PERSONAL ARCHIVE LOADED</p><p><b>L4-C &gt;</b> Greetings, traveler. I keep the records; Louis lives the story. Pick a question below.</p>';
}
document.querySelectorAll("[data-prompt]").forEach(
  (b) =>
    (b.onclick = () => {
      const log = $("#terminal-history");
      const q = document.createElement("p");
      q.className = "visitor";
      q.textContent = "YOU > " + b.textContent;
      const a = document.createElement("p");
      const prefix = document.createElement("b");
      prefix.textContent = "L4-C > ";
      a.append(prefix, document.createTextNode(droidAnswers[b.dataset.prompt]));
      log.append(q, a);
      while (log.children.length > 10) log.firstElementChild.remove();
      log.scrollTop = log.scrollHeight;
    }),
);
$("#clear-log").onclick = droidWelcome;
let hits = 0;
const positions = [
  [14, 15],
  [70, 55],
  [30, 70],
  [65, 10],
  [45, 40],
];
$("#remote").onclick = () => {
  if (hits >= 5) return;
  hits++;
  $("#training-score").textContent = String(hits).padStart(2, "0");
  $("#remote").classList.remove("hit");
  requestAnimationFrame(() => $("#remote").classList.add("hit"));
  $("#training-state").textContent =
    hits === 5 ? "TRAINING COMPLETE" : "CONTACT CONFIRMED";
  $("#training-feedback").textContent =
    hits === 5
      ? "Five deflections. Well done, traveler. The Force is with you."
      : [
          "Good start. Follow the remote.",
          "Two contacts. Keep your focus.",
          "Three down. You’re getting the hang of this.",
          "One more. Trust your instincts.",
        ][hits - 1];
  if (hits === 5) {
    $("#remote").disabled = true;
    $(".training-field").classList.add("complete");
  } else {
    const [x, y] = positions[hits - 1];
    $("#remote").style.left = x + "%";
    $("#remote").style.top = y + "%";
  }
};
$("#training-reset").onclick = () => {
  hits = 0;
  $("#training-score").textContent = "00";
  $("#training-state").textContent = "AWAITING FIRST CONTACT";
  $("#training-feedback").textContent = "Tap the remote to begin.";
  $("#remote").disabled = false;
  $("#remote").style.left = "45%";
  $("#remote").style.top = "40%";
  $(".training-field").classList.remove("complete");
};

// Original procedural sci-fi sound effects. No external sound files required.
// The SFX button is the master switch; the page begins muted.
const soundFX = (() => {
  let audioContext;
  let master;
  let enabled = false;
  let lastTuningTick = 0;
  let wasLocked = false;

  function tone(start, duration, from, to, type = "sine", level = 0.22) {
    const oscillator = audioContext.createOscillator();
    const envelope = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(from, start);
    oscillator.frequency.exponentialRampToValueAtTime(
      Math.max(1, to),
      start + duration,
    );
    envelope.gain.setValueAtTime(0.001, start);
    envelope.gain.exponentialRampToValueAtTime(
      level,
      start + Math.min(0.018, duration / 4),
    );
    envelope.gain.exponentialRampToValueAtTime(0.001, start + duration);
    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
    oscillator.onended = () => {
      oscillator.disconnect();
      envelope.disconnect();
    };
  }

  function noise(start, duration, from, to, level = 0.3) {
    const buffer = audioContext.createBuffer(
      1,
      Math.ceil(audioContext.sampleRate * duration),
      audioContext.sampleRate,
    );
    const samples = buffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const envelope = audioContext.createGain();
    source.buffer = buffer;
    filter.type = "bandpass";
    filter.Q.value = 1.4;
    filter.frequency.setValueAtTime(from, start);
    filter.frequency.exponentialRampToValueAtTime(to, start + duration);
    envelope.gain.setValueAtTime(0.001, start);
    envelope.gain.exponentialRampToValueAtTime(level, start + 0.03);
    envelope.gain.exponentialRampToValueAtTime(0.001, start + duration);
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);
    source.start(start);
    source.stop(start + duration);
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      envelope.disconnect();
    };
  }

  function play(effect) {
    if (!enabled || !audioContext || audioContext.state !== "running") return;
    const t = audioContext.currentTime + 0.005;
    switch (effect) {
      case "jump":
        noise(t, 1.05, 160, 5800, 0.6);
        tone(t, 0.85, 55, 750, "sawtooth", 0.12);
        tone(t + 0.65, 0.35, 1100, 80, "sine", 0.2);
        break;
      case "ignite":
        noise(t, 0.5, 250, 2400, 0.45);
        tone(t, 0.65, 45, 130, "sawtooth", 0.2);
        tone(t + 0.1, 0.5, 110, 90, "sine", 0.2);
        break;
      case "retract":
        noise(t, 0.38, 1800, 120, 0.35);
        tone(t, 0.4, 180, 40, "sawtooth", 0.18);
        break;
      case "holocron":
        [440, 660, 880, 1320].forEach((f, i) =>
          tone(t + i * 0.055, 0.38, f, f, "sine", 0.18),
        );
        break;
      case "scan":
        tone(t, 0.45, 220, 1600, "sine", 0.18);
        tone(t + 0.45, 0.12, 1100, 1100, "sine", 0.2);
        tone(t + 0.59, 0.12, 1500, 1500, "sine", 0.2);
        break;
      case "deflect":
        noise(t, 0.12, 2200, 400, 0.4);
        tone(t, 0.16, 1000, 120, "sawtooth", 0.2);
        break;
      case "success":
        [392, 494, 587, 784].forEach((f, i) =>
          tone(t + i * 0.1, 0.28, f, f, "triangle", 0.24),
        );
        break;
      case "droid":
        [820, 1280, 650].forEach((f, i) =>
          tone(t + i * 0.075, 0.09, f, f * 1.12, "sine", 0.2),
        );
        break;
      case "crystal":
        tone(t, 0.2, 880, 1760, "sine", 0.2);
        break;
      case "tick":
        tone(t, 0.045, 360, 420, "triangle", 0.16);
        break;
      default:
        tone(t, 0.075, 600, 850, "sine", 0.16);
    }
  }

  async function toggle() {
    try {
      if (!audioContext) {
        const AudioEngine = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioEngine();
        master = audioContext.createGain();
        master.gain.value = 0.22;
        master.connect(audioContext.destination);
      }
      if (!enabled) {
        await audioContext.resume();
        enabled = true;
      } else {
        enabled = false;
        await audioContext.suspend();
      }
      $("#audio").setAttribute("aria-pressed", String(enabled));
      $("#audio").setAttribute(
        "aria-label",
        enabled
          ? "Mute interaction sound effects"
          : "Enable interaction sound effects",
      );
      $("#audio span").textContent = enabled ? "ON" : "OFF";
      if (enabled) play("success");
    } catch {
      enabled = false;
      $("#audio span").textContent = "UNAVAILABLE";
      $("#audio").setAttribute("aria-pressed", "false");
    }
  }

  function tuning() {
    const locked = Math.abs(Number($("#tuner").value) - 1037) <= 2;
    if (locked && !wasLocked) play("success");
    else if (!locked && performance.now() - lastTuningTick > 110) {
      play("tick");
      lastTuningTick = performance.now();
    }
    wasLocked = locked;
  }

  return { play, toggle, tuning };
})();

$("#audio").onclick = soundFX.toggle;
// Run after each control's visual handler, so sound matches its resulting state.
document.addEventListener("click", (event) => {
  const control = event.target.closest("button, a");
  if (!control || control.id === "audio") return;
  if (control.id === "jump") soundFX.play("jump");
  else if (control.id === "ignite")
    soundFX.play(ignited ? "ignite" : "retract");
  else if (control.id === "holocron-toggle") soundFX.play("holocron");
  else if (control.id === "scan-profile")
    soundFX.play($("#crew-details").hidden ? "ui" : "scan");
  else if (control.id === "remote")
    soundFX.play(hits === 5 ? "success" : "deflect");
  else if (control.dataset.prompt) soundFX.play("droid");
  else if (control.dataset.kyber) soundFX.play("crystal");
  else if (control.id === "auto-tune") soundFX.tuning();
  else soundFX.play("ui");
});
$("#tuner").addEventListener("input", soundFX.tuning);

// Copy the exact Discord handle; no account ID or profile URL is guessed.
$("#copy-discord").addEventListener("click", async () => {
  const status = $("#contact-status");
  try {
    if (!navigator.clipboard || !window.isSecureContext)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText("poch0lo");
    status.textContent = "DISCORD USERNAME COPIED: poch0lo";
    $("#copy-discord").innerHTML = 'COPIED <span aria-hidden="true">✓</span>';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents($("#discord-handle"));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent =
      "USERNAME SELECTED: poch0lo — press Ctrl+C or Command+C to copy.";
  }
});
