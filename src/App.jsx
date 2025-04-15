import { useEffect, useState } from "react";
import Form from "./Form";
import Header from "./Header";
import joker from "/joker.png";

function App() {
  const [memesArray, setMememsArray] = useState([]);
  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  useEffect(() => {
    async function fetchData() {
      const respnse = await fetch("https://api.imgflip.com/get_memes");
      const data = await respnse.json();
      setMememsArray(data.data.memes);
    }
    fetchData();
  }, []);

  const handleChange = () => {
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const randomImage = memesArray[randomNum].url
    setMemeImage(randomImage)
  };

  return (
    <div
      className="w-full 
     mx-auto bg-white border-2 border-red-400  pb-6 "
    >
      <Header />
      <Form  formData={formData} setFormData={setFormData}/>
      <button
        className="w-[95%] mx-auto text-white text-lg bg-[#a025c8] flex gap-2 py-2 justify-center mb-8 rounded-md"
        onClick={handleChange}
      >
        <span>Generate a new meme image</span>
        <img src={joker} alt="joker" width={30} height={30} />
      </button>
      <div className=" relative w-[95%] mx-auto h-64">
        <p className="top-0 text">
          {formData.topText}
        </p>
        <img src={memeImage} alt="" className="max-w-full w-full h-full Z-0 object-fill" />
        <p className=" bottom-0 text">
          {formData.bottomText}
        </p>
      </div>
    </div>
  );
}

export default App;
