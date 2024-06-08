import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [data, setData] = useState([])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => setData(json))
}, [])

return (
<>
  <div className="container ">
    <div className="flex flex-wrap gap-8 p-10 ">
      {data.map((item) => (
      <div key={item.id}
        className="card w-[265px] h-[380px] rounded-[15px] p-5 flex items-center flex-col gap-5 shadow-2xl shadow-[7px 14px 74px -19px rgba(212,26,26,1)]">
        <div className=" w-[180px] h-[180px] border border-[#000] rounded-full overflow-hidden">
          <img src="https://neural.love/cdn/thumbnails/1eda165e-4d17-6cd6-b2ac-1d9b66470591/439bdd48-2aed-5706-a2fe-2cf86402ac51.webp?Expires=1722470399&Signature=Je09UQH9Un2N6W5EYsjs0fz0M-iGd6~0Un6io7y~k-bikNokWzbrHz04~ebDzSiKwAfvQSFsgMiMaTlzt1dsaktzhZLVCNdZAsL1SiL8xRaNFwCiTtwzr~sn5I7IBMiNdBCPWticwDkMOvpyVydOjBh3BweREkUnwY5XH8sdIHMDmKEk-PRUMNCx9odtcXBGzOWzn8-ChAwZfSI4wWRaVKuvLGR3rpWxnutAWubVOPYdwkhgVn9n4mreygR8fP~kVLNrDgrMTlCKDXtCEI1Sm-zqtNGhkkhZ2r8q2DM1~PUNhcEQbe2iOZuiFB1I3ITLG8CpM~ubQNlCk-jo2hiaFg__&Key-Pair-Id=K2RFTOXRBNSROX" alt="profile picture" />
        </div>
        <div>
          <p className='text-[13px] font-jose font-bold text-[#000]'>Id : {item.id}</p>
          <p className='text-[13px] font-jose font-bold text-[#000] py-4'>Name : {item.name}</p>
          <p className='text-[13px] font-jose font-bold text-[#000]'>Email : {item.email}</p>
        </div>
      </div>
      ))}
    </div>
  </div>
</>
)
}

export default App