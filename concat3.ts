function concat3<T extends string>(strs:T,strs2:T){
    console.log(typeof strs,strs);
    console.log(typeof strs2,strs2);
    return (strs + strs2);

}


concat3<string>('awe','bbbx');
