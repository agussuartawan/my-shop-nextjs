export const Button = (props) => {
    const {
        children,
        className = 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300',
    } = props
    return (
        <button
            {...props}
            className={`${className} text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
        >
            {children}
        </button>
    )
}
