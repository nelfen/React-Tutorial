enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

function movePlayer(direction: Direction) {
    if (direction === Direction.Up) {
        console.log("플레이어가 위로 움직입니다. (값: " + direction + ")");
    } else {
        console.log("다른 방향으로 움직입니다.");
    }
}

movePlayer(Direction.Up);
// movePlayer(5);