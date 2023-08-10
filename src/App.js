// import logo from './logo.svg';
import './App.css';

function App() {
  const $h2 = <h2>반가워요^^</h2>;
  return (
    <>
      <div className="App">
      <h1>Kitsch</h1>
      {$h2}
      </div>
      <div className='noname'>
          <p>
           우리만의 자유로운 nineteen's kitsch<br />
           지금까지 한적 없는 custom fit<br />
           올려 대는 나의 feed엔 like it<br />
           홀린 듯이 눌러 모두 다 like it<br />
           내가 추는 춤을 다들 따라 춰<br />
           매일 너의 알고리즘에 난 떠<br />
           걷잡을 수 없이 올라 미친 score<br />
           그 누구도 예상 못할 nineteen's kitsch<br />
          </p>
      </div>
    </>
   
  );
}
export default App;