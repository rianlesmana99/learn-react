
function Card({ children }) {
    return <div className="bg-white rounded-lg shadow-lg p-3 w-96">{children}</div>
}

function Title({ children }) {
    return <h2 className="text-slate-800 font-semibold p-2 border-b border-slate-300">{children}</h2>
}

function Body({ children }) {
    return <div className="p-2">{children}</div>
}

function Footer({ children }) {
    return <div className="py-2 text-slate-800 text-center">{children}</div>
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;