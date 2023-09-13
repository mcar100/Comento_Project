// grid-area에서 비어있는 위치에 메모 배치
export function setGridPosition(div) {
  const checkArray = checkGridArray();
  for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 5; j++) {
      if (checkArray[i - 1][j - 1] === 0) {
        div.style.gridColumn = j;
        div.style.gridRow = i;
        return;
      }
    }
  }
}

// grid-area의 빈 구역을 탐색하는 함수
function checkGridArray() {
  const checkArray = Array.from(Array(2), () => new Array(4).fill(0));
  const gridArray = document.querySelectorAll(".memo");
  if (gridArray.length > 0) {
    gridArray.forEach((ele) => {
      const c = Number(ele.style.gridColumn[0]);
      const r = Number(ele.style.gridRow[0]);
      checkArray[r - 1][c - 1] = 1;
    });
  }

  return checkArray;
}
