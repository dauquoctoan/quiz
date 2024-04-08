interface IResult<T> {
    message: string
    statusCode?: number
    code: 0 | 1
    messageDetail?: any
    data?: T
}

