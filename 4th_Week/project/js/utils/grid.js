import { grid } from "../main.js";

const ROWS = 2;
const COLUMNS = 4;

// 빈 그리드 정보를 초기화 및 갱신하는 함수
export function initGridArray() {
  const gridQueue = [];

  for (let row = 1; row <= ROWS; row++) {
    for (let column = 1; column <= COLUMNS; column++) {
      gridQueue.push({ row, column });
    }
  }

  // 삭제되는 메모의 그리드 정보가 추가됨
  function addEmptyGridSpace(row, column) {
    gridQueue.push({ row, column });
  }

  // 가장 처음에 있는 빈 그리드 정보 리턴
  function getEmptyGridSpace() {
    return gridQueue.shift();
  }

  return { addEmptyGridSpace, getEmptyGridSpace };
}

// grid-area에서 비어있는 위치에 메모 배치
export function setGridPosition(div) {
  const emptyGrid = grid.getEmptyGridSpace();
  div.style.gridRow = emptyGrid.row;
  div.style.gridColumn = emptyGrid.column;
}
