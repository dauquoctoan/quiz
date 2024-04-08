export function validEmail(email: string): boolean {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
