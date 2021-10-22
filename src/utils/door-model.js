function doorModel(index) {
    return {
        index,
        isOpening: false,
        isOpened: false,
        isKiller: false,
        disabled: false
    }
}

export function initializeDoorsModel(numDoors) {
    return Array(numDoors).fill(null).map((_, index) => doorModel(index))
}