const lions = [];

const nameInput = document.getElementById("lionName");
const partSelect = document.getElementById("lionPart");
const addBtn = document.getElementById("addBtn");
const lionList = document.getElementById("lionList");
const firstLionBtn = document.getElementById("firstLionBtn");
const errorTestBtn = document.getElementById("errorTestBtn");

function getFirstItem(items) {
  return items[0];
}

function render() {
  lionList.innerHTML = "";

  lions.forEach((lion) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>🦁 ${lion.name} (${lion.part})</span>
      <button>삭제</button>
    `;

    const deleteBtn = li.querySelector("button");

    deleteBtn.addEventListener("click", () => {
      deleteLion(lion.id);
    });

    lionList.appendChild(li);
  });
}

function addLion() {
  const lion = {
    id: Date.now(),
    name: nameInput.value,
    part: partSelect.value,
  };

  lions.push(lion);
  render();
}

function deleteLion(id) {
  const index = lions.findIndex((lion) => lion.id === id);

  if (index !== -1) {
    lions.splice(index, 1);
  }

  render();
}

addBtn.addEventListener("click", addLion);

firstLionBtn.addEventListener("click", () => {
  const firstLion = getFirstItem(lions);

  if (firstLion) {
    alert(`첫 번째 아기사자: ${firstLion.name}`);
  } else {
    alert("등록된 아기사자가 없습니다.");
  }
});

errorTestBtn.addEventListener("click", () => {
  const wrongLion = {
    id: "1",
    name: "Tom",
    part: "AI",
  };

  lions.push(wrongLion);
  render();
});