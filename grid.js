const GRID_SIZE = 18

export function randomGridPosition() {
  // return {
  //   x: Math.floor(Math.random() * GRID_SIZE) + 1,
  //   y: Math.floor(Math.random() * GRID_SIZE) + 1
  // }
  return randomPositionInGrid()
}

export function outsideGrid(position) {
  return (
    position.x < 4 || position.x > GRID_SIZE ||
    position.y < 4 || position.y > GRID_SIZE
  )
}

function randomPositionInGrid() {
  let randomPos = {x: 0, y: 0}
  do {
    randomPos.x = Math.floor(Math.random() * GRID_SIZE) + 1
    randomPos.y = Math.floor(Math.random() * GRID_SIZE) + 1

  } while (outsideGrid(randomPos))
  return randomPos
}