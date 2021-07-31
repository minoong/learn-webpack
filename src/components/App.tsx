import React from 'react';
import Style from './App.module.css';

const App: React.FC = () => {
    let promise = new Promise((resolve, reject) => {
        console.log(1);
        return resolve(1);
      });
      
      promise.then((value) => console.log(value)).catch((e) => console.error(e));
      
      async function testFunc() {
        let value = await promise;
        console.log(`async ${value}`);
      }
      
      testFunc();
    return (
        <div style={Style}>dksfjskladjl</div>
    );
};

export default App;
