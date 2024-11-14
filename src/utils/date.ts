export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return `${year}.${month}.${day}`
}

export const getMounth = (date: Date): number | string => {
    const month = date.getMonth() + 1
    return month
}

export const getYear = (date: Date): number | string => {
    const year = date.getFullYear();
    return year
}

export const getDay = (date: Date): number | string => {
    const day = date.getDate() 
    return day
}