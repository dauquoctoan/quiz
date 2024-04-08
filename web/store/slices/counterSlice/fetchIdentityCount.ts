export const fetchIdentityCount = async (
    amount = 1
): Promise<number> => {
    const response = await fetch('http://localhost:3009/api/me/count/' + amount, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    const result = await response.json()
    return result
}