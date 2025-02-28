
const InputLink = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Introduce un enlace"
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
    );
}