function Player(maze) {
    this.x = 200;
    this.y = 200;
    this.pressingRight = false;
    this.pressingLeft = false;
    this.pressingUp = false;
    this.pressingDown = false;
    this.speed = 30;
    this.radius = 70;
    this.color = 'white';

    this.updatePosition = function (maze) {
        var chunk = maze.getChunk(this.x, this.y);
        var cell = chunk.getCell(this.x, this.y);
        cell.color = this.color;
        var neighbors = cell.getNeighbors(chunk.cells, chunk.n, chunk.n);

        if (this.pressingUp) {
            var n = neighbors[0];
            if (n && n.wall) {
                for (var i = 0; i < this.speed; i++) {
                    if (!this.colission(n.x, n.y, n.w, n.w)) {
                        this.y -= 1;
                    }
                }
            } else {
                for (var i = 0; i < this.speed; i++) {
                    this.y -= 1;
                }
            }
        }

        if (this.pressingRight) {
            var n = neighbors[1];
            if (n && n.wall) {
                for (var i = 0; i < this.speed; i++) {
                    if (!this.colission(n.x, n.y, n.w, n.w)) {
                        this.x += 1;
                    }
                }
            } else {
                for (var i = 0; i < this.speed; i++) {
                    this.x += 1;
                }
            }
        }

        if (this.pressingDown) {
            var n = neighbors[2];
            if (n && n.wall) {
                for (var i = 0; i < this.speed; i++) {
                    if (!this.colission(n.x, n.y, n.w, n.w)) {
                        this.y += 1;
                    }
                }
            } else {
                for (var i = 0; i < this.speed; i++) {
                    this.y += 1;
                }
            }
        }

        if (this.pressingLeft) {
            var n = neighbors[3];
            if (n && n.wall) {
                for (var i = 0; i < this.speed; i++) {
                    if (!this.colission(n.x, n.y, n.w, n.w)) {
                        this.x -= 1;
                    }
                }
            } else {
                for (var i = 0; i < this.speed; i++) {
                    this.x -= 1;
                }
            }
        }
    }

    this.colission = function (rectX, rectY, rectWidth, rectHeight) {
        var deltaX = this.x - Math.max(rectX, Math.min(this.x, rectX + rectWidth));
        var deltaY = this.y - Math.max(rectY, Math.min(this.y, rectY + rectHeight));
        return (deltaX * deltaX + deltaY * deltaY) < (this.radius * this.radius);
    }
}