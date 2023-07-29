type Square = {
    size: number;
}

type Rectangle = {
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
   if('size' in shape) {
       return shape.size * shape.size;
   }
   if('width' in shape) {
       return shape.width * shape.height;
   }
}

area({ size: 10 });
area({ width: 10, height: 10 });