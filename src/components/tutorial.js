
function quicksort(array, sortBy, sortAscending) {
    if (sortBy === "price" && sortAscending) {
        array = quicksortPrice(array, 0, array.length - 1);
    } else if (sortBy === "beta" && sortAscending) {
        array = quicksortBeta(array, 0, array.length - 1);
    } else if (sortBy === "symbol" && sortAscending) {
        array = quicksortSymbol(array, 0, array.length - 1);
    } else if (sortBy === "marketCap" && sortAscending) {
        array = quicksortMC(array, 0, array.length - 1);
    } else if (sortBy === "volume" && sortAscending) {
        array = quicksortVolume(array, 0, array.length - 1);
    }
    else if (sortBy === "price" && !sortAscending)
    {
        array = quicksortPriceR(array, 0, array.length - 1);
    }
    else if (sortBy === "beta" && !sortAscending)
    {
        array = quicksortBetaR(array, 0, array.length - 1);
    }
    else if (sortBy === "symbol" && !sortAscending)
    {
        array = quicksortSymbolR(array, 0, array.length - 1);
    }
    else if (sortBy === "marketCap" && !sortAscending)
    {
        array = quicksortMCR(array, 0, array.length - 1);
    }
    else if (sortBy === "volume" && !sortAscending)
    {
        array = quicksortVolumeR(array, 0, array.length - 1);
    }

    return array;

};

function quicksortSymbol(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].symbol < pivotSpot.symbol)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortSymbol(l).concat(pivotSpot, quicksortSymbol(r));
}

function quicksortPrice(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i].price < pivotSpot.price)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortPrice(l).concat(pivotSpot, quicksortPrice(r));
}

function quicksortBeta(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].beta < pivotSpot.beta)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortBeta(l).concat(pivotSpot, quicksortBeta(r));
}

function quicksortVolume(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].volume < pivotSpot.volume)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortVolume(l).concat(pivotSpot, quicksortVolume(r));
}

function quicksortMC(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].marketCap < pivotSpot.marketCap)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortMC(l).concat(pivotSpot, quicksortMC(r));
}

function quicksortSymbolR(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].symbol > pivotSpot.symbol)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortSymbolR(l).concat(pivotSpot, quicksortSymbolR(r));
}

function quicksortPriceR(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i].price > pivotSpot.price)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortPriceR(l).concat(pivotSpot, quicksortPriceR(r));
}

function quicksortBetaR(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].beta > pivotSpot.beta)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortBetaR(l).concat(pivotSpot, quicksortBetaR(r));
}

function quicksortVolumeR(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].volume > pivotSpot.volume)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortVolumeR(l).concat(pivotSpot, quicksortVolumeR(r));
}

function quicksortMCR(array) {
    if (array.length - 1 <= 0) {
        return array;
    }

    let pivotSpot = array[0];
    let r = [];
    let l = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i].marketCap > pivotSpot.marketCap)
            l.push(array[i])
        else
            r.push(array[i]);
    }

    return quicksortMCR(l).concat(pivotSpot, quicksortMCR(r));
}

export default quicksort;