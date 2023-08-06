const Textarea = ({label}) => {
    return (
      <div className="w-full my-3">
          <label for={label} class="block mb-2 text-lg font-medium text-foreground">{label}</label>
          <textarea id={label} rows="3" class="transition-all px-5 py-4 bg-darkGrey border border-gray-900 text-white text-md rounded focus:ring-gray-700 focus:border-gray-700 block w-full outline-none" required />
      </div>
    )
  }
  
  export default Textarea;