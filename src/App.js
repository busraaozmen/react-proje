
import { useEffect } from 'react';
// import './style.css' //global olarak alır aynı class olanlara özelliği verebiliriz

import styles from './App.module.css' //  module component yapabiliyoruz.

import Demo from './Demo';

import { Title } from './components'
import Bootstrap from './Bootstrap';

import  './input.css'
import TailWind from './Tailwind';

function App() {
  useEffect(() => {

    console.log(styles)
    if (process.env.NODE_ENV === 'production') {
      //ANALYTİCİ BİLGİLENDİR
    }
  }, [])


  return (
    <>
      <div className={styles.App}>
        {/* Projeyi development kısmında geliştirdiğinizi gösterir */}
        <Title >{process.env.NODE_ENV}</Title>
        <Title theme="dark">{process.env.NODE_ENV}</Title>
        {process.env.NODE_ENV === 'production' && (
          <>
            <img src="/logo192.png" alt="" />
          </>
        )}
      </div>
      <Demo />

      <div>

  </div>
<Bootstrap/>

<TailWind/>
    </>
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