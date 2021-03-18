export function reduceErrors(errors) {
    const messages = []
    for (const key in errors) {
        const value = errors[key]
        if (typeof value === 'string') {
            messages.push(value)
        } else if (typeof value === 'object') {
            messages.push(...reduceErrors(value))
        } else if (Array.isArray(value)) {
            for (const item of value) {
                messages.push(...reduceErrors(item))
            }
        }
    }
    return [...new Set(messages)]
}

export function calcTotal(items) {
    let total = 0
    for (const item of items) {
        total += item.total
    }
    return total
}