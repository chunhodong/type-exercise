class Filter {
    unique(array) {
        return array.filter((v, i, array) => array.indexOf(v) === i);
    }
}
