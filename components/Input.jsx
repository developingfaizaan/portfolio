const Input = ({label, type}) => {
  return (
    <div className="w-full my-3">
        <label for={label} class="block mb-2 text-lg font-medium text-foreground">{label}</label>
        <input type={type} id={label} class="px-5 py-4 bg-darkGrey border border-gray-900 text-white text-md rounded focus:ring-gray-700 focus:border-gray-700 block w-full outline-none" required />
    </div>
  )
}

export default Input;