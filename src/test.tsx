
import { useEffect } from 'react';
import './App.css';

function App() {
useEffect(() => {
  if(process.env.NODE_ENV === 'production'){
    //ANALYTİCİ BİLGİLENDİR
  }
},[])


  return (
<div>

 {/* Projeyi development kısmında geliştirdiğinizi gösterir */}
<h2>{process.env.NODE_ENV}</h2>

{process.env.NODE_ENV === 'production' && (
<>
<img src="/logo192.png" alt="" />
</>
)}
  
</div>
  );
}

export default App;


//create a new repository on the command line
// git init
//gidd add .  => bütün hepsini . alacak
//git status  => deleted,modified ...
//git commit -m 'first react  code'
//git branch _M main
//git remote add origin https://github.com/busraaozmen.....
// git push -u origin main
//git status