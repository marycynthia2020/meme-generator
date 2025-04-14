import Form from "./Form"
import Header from "./Header"
import joker from "/joker.png"

function App() {

  return (
    <div className="w-full 
     mx-auto bg-white border-2 border-red-400   ">
      <Header />
      <Form />
      <button className="w-full text-white text-lg bg-[#a025c8] flex gap-2 py-4 justify-center mb-8">
        <span>Generate a new meme image</span>
        <img src={joker} alt="joker" width={30} height={30}/>
      </button>
      <div className="w-4/5 h-60">
        <img src={joker} alt="" className="max-w-full w-full h-full" />
      </div>
    </div>
  )
}

export default App
