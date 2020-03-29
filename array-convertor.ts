class ArrayConvertor<T>{
    elements:Array<T>;


    getValue(elems:Array<T>,index:number):T{
        return elems[index];
    }
}

let arr0:ArrayConvertor<number> = new ArrayConvertor<number>();