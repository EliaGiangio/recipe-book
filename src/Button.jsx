export default function Button({ title, onClick, styling }) {
    const classStyles = styling + ' btn btn-primary';
    return (
        <button className={classStyles} onClick={onClick}>
            {title}
        </button>
    )
}