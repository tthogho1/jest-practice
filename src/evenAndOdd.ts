const evenAndOdd = (numList: number[]) => {
    return numList.map(num => ({ isEven: !(num % 2) }))
}

export { evenAndOdd } 