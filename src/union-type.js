import Type from "https://dev.jspm.io/union-type";
import { map } from "https://dev.jspm.io/ramda";

const Point = Type({ Point: [Number, Number] });
const Shape = Type({
    Circle: [Number, Point],
    Rectangle: [Point, Point],
});

const center = Point.Point(12, 7);
const radius = 8;
const circle = Shape.Circle(radius, center);
const cornerA = Point.Point(0, 0);
const cornerB = Point.Point(10, 20);
const rectangle = Shape.Rectangle(cornerA, cornerB);

const printPoint = Point.case({
    Point: (x, y) => `Point: [${[x, y]}]`,
});

const printShape = Shape.case({
    Circle: (radius, center) => {
        console.log("Circle:", radius, "/", printPoint(center));
    },
    Rectangle: (cornerA, cornerB) => {
        console.log(
            "Rectangle:",
            map(printPoint)([cornerA, cornerB]).join(" / "),
        );
    },
});
map(printShape)([circle, rectangle]);
