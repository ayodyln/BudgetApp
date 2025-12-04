interface UseLocale {
    getDate: (iso: UTCStr) => string
    getCurrency: (amount: string | number) => string
}

export const useLocale = (): UseLocale => {
    const getDate = (iso: UTCStr): string =>
        new Intl.DateTimeFormat(window.navigator.language, {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        }).format(new Date(iso))

    const getCurrency = (amount: string | number): string =>
        new Intl.NumberFormat(window.navigator.language, {
            style: 'currency',
            currency: 'USD',
        }).format(typeof amount === 'number' ? amount : parseInt(amount))

    return { getDate, getCurrency }
}
