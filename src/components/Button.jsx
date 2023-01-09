
export default function Button({ children, ...props }) {
    return <button className="bg-blue-700 text-white rounded-md h-10 mt-4 font-semibold" {...props}>{children}</button>
}