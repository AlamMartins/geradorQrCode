import {useState} from 'react';
import QRCode from "react-qr-code"
import QrcodeLink from "qrcode"

import "./App.css";


function App() {

  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');
  const [limparCampos, setLimparCampos] = useState('');



  function handleGenerate(link_url){

    QrcodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    })

  }

  function handleQrcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }
 
  return (
    <div className="grid py-10 bg-gray-300 text-center">
      
    <div className="w-200 justify-self-center">

    <QRCode
      value={link}
      className="w-[150px] h-[200px]"
      />

    </div>
      
      <div>
        
      <input 
        type="text" 
        placeholder="Digite o texto" 
        className="input my-2 py-1 mb-8 w-[200px] rounded-md" 
        value={link}
        onChange={(e) => handleQrcode(e)}
      />
      </div>


      <div className="flex gap-10 justify-self-center ">
      <div className="bg-red-500 hover:bg-[#f46464] p-2 h10 w-[150px] rounded-lg text-white">
      <a href={limparCampos} 
      className=" ">
        Limpar
      </a>
      </div>

      <div className="bg-sky-500 hover:bg-[#9cc3df] p-2 h10 w-[150px] rounded-lg text-white">
      <a href={qrcodeLink} download={`qrcode.png`} 
      className=" ">
        Baixar o QR Code
      </a>
      </div>
      
      </div>
    


    </div>


  );
}

export default App;
