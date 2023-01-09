
export default function Input({ type = "text", ...props }) {
    return <input className="transition-all duration-300 rounded-md mb-3 w-full focus:outline-none border-gray-400 focus:ring focus:ring-blue-200 focus:border-blue-400" type={type} {...props} />
}