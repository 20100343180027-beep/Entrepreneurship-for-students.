const board = document.getElementById("board");
const addBtn = document.getElementById("addNote");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

/* Save */
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

/* Create note */
function createNote(data) {
  const note = document.createElement("div");
  note.className = "note";
  note.style.left = data.x + "px";
  note.style.top = data.y + "px";
  note.style.background = data.color;

  note.innerHTML = `
    <div class="controls">
      <input type="color" value="${data.color}">
      <button>🗑️</button>
    </div>
    <div class="note-content" contenteditable="true">${data.text}</div>
  `;

  const colorPicker = note.querySelector("input");
  const deleteBtn = note.querySelector("button");
  const content = note.querySelector(".note-content");

  /* Color change */
  colorPicker.addEventListener("input", () => {
    note.style.background = colorPicker.value;
    data.color = colorPicker.value;
    saveNotes();
  });

  /* Delete */
  deleteBtn.addEventListener("click", () => {
    notes = notes.filter(n => n.id !== data.id);
    saveNotes();
    note.remove();
  });

  /* Text edit */
  content.addEventListener("input", () => {
    data.text = content.innerHTML;
    saveNotes();
  });

  makeDraggable(note, data);
  board.appendChild(note);
}

/* Drag (mouse + touch) */
function makeDraggable(note, data) {
  let offsetX, offsetY;

  function start(e) {
    const touch = e.touches ? e.touches[0] : e;
    offsetX = touch.clientX - note.offsetLeft;
    offsetY = touch.clientY - note.offsetTop;

    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("mouseup", end);
    document.addEventListener("touchend", end);
  }

  function move(e) {
    const touch = e.touches ? e.touches[0] : e;
    data.x = touch.clientX - offsetX;
    data.y = touch.clientY - offsetY;
    note.style.left = data.x + "px";
    note.style.top = data.y + "px";
  }

  function end() {
    saveNotes();
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", move);
  }

  note.addEventListener("mousedown", start);
  note.addEventListener("touchstart", start);
}

/* Add new note */
addBtn.addEventListener("click", () => {
  const data = {
    id: Date.now(),
    text: "Write your goal here...",
    x: 100,
    y: 100,
    color: "#fff7a3"
  };

  notes.push(data);
  saveNotes();
  createNote(data);
});

/* Load saved notes */
notes.forEach(createNote);
e(note);
