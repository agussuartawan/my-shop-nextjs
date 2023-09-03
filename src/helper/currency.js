export default function currency(value) {
    const formatter = Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
    })
    return formatter.format(value)
}
