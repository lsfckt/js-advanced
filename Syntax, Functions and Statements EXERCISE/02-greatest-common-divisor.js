function gdc(first, second) {
    
    return second === 0 ? first : gdc(second, first % second);
    
}
