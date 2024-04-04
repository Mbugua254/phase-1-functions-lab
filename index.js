function distanceFromHqInBlocks(blocks){
    const headquarters = 42;
    return Math.abs(blocks - headquarters);
}

function distanceFromHqInFeet(blocks){
    const blocksFromHq = distanceFromHqInBlocks(blocks);
    const feetPerBlock = 264;
    return blocksFromHq * feetPerBlock;
}

function distanceTravelledInFeet(start, destination){
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start);
    return distance * feetPerBlock;
}

function calculatesFarePrice(start, destination){
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;

    if (distanceInFeet <= 400) {
        return 0;
    }
    else if (distanceInFeet <=2000) {
        return (distanceInFeet - 400) * 0.02;
    }
    else if (distanceInFeet <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
