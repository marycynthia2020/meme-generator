const Form = ({formData, setFormData}) => {

  function handleChange(e) {
    const { name, value} = e.target
    setFormData(prevData => {
        return {
            ...prevData, [name]:value
        }
    })
  }

 console.log(formData)
  return (
    <form className="w-[95%]  mx-auto flex flex-col lg:flex-row  gap-4 p-2 lg:items-center lg:justify mb-4">
      <input
        type="text"
        className="border-2 h-10 p-2 lg:w-1/2 "
        placeholder="Top text"
        name="topText"
        onChange={handleChange}
        value={formData.topText}

      />
      <input
        type="text"
        className="border-2 h-10 p-2 lg:w-1/2"
        placeholder="Bottom text"
        name="bottomText"
        onChange={handleChange}
        value={formData.bottomText}
      />
    </form>
  );
};

export default Form;
