type Part = "Frontend" | "Backend" | "Design";

interface Lion {
  id: number;
  name: string;
  part: Part;
}

const lions: Lion[] = [];

const nameInput = document.getElementById(
  "lionName"
) as HTMLInputElement;

const partSelect = document.getElementById(
  "lionPart"
) as HTMLSelectElement;

const addBtn = document.getElementById(
  "addBtn"
) as HTMLButtonElement;

const lionList = document.getElementById(
  "lionList"
) as HTMLUListElement;

const firstLionBtn = document.getElementById(
  "firstLionBtn"
) as HTMLButtonElement;

// Generic
function getFirstItem<T>(
  items: T[]
): T | undefined {
  return items[0];
}

function render(): void {
  lionList.innerHTML = "";

  lions.forEach((lion: Lion) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>🦁 ${lion.name} (${lion.part})</span>
      <button>삭제</button>
    `;

    const deleteBtn = li.querySelector(
      "button"
    ) as HTMLButtonElement;

    deleteBtn.addEventListener("click", () => {
      deleteLion(lion.id);
    });

    lionList.appendChild(li);
  });
}

function addLion(): void {
  const lion: Lion = {
    id: Date.now(),
    name: nameInput.value,
    part: partSelect.value as Part,
  };

  lions.push(lion);
  render();
}

function deleteLion(id: number): void {
  const index = lions.findIndex(
    (lion: Lion) => lion.id === id
  );

  if (index !== -1) {
    lions.splice(index, 1);
  }

  render();
}

addBtn.addEventListener("click", addLion);

firstLionBtn.addEventListener("click", () => {
  const firstLion = getFirstItem<Lion>(lions);

  if (firstLion) {
    alert(`첫 번째 아기사자 : ${firstLion.name}`);
  } else {
    alert("등록된 아기사자가 없습니다.");
  }
});