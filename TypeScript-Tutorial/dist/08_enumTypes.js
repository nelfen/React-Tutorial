var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
function movePlayer(direction) {
    if (direction === Direction.Up) {
        console.log("플레이어가 위로 움직입니다. (값: " + direction + ")");
    }
    else {
        console.log("다른 방향으로 움직입니다.");
    }
}
movePlayer(Direction.Up);
export {};
// movePlayer(5);
