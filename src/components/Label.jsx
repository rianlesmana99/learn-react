
export default function Label({ children, htmlFor }) {
    return <label className="text-slate-800 mb-2" htmlFor={htmlFor}>{children}</label>
}