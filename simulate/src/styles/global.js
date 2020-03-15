import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}
html,
body #root {
  height: 100%;
}
body{
    display:flex;
    width: auto;
    height:auto;
    flex-direction:column;
    background:#eae5ff;
    font-size:14px;
    color: #333;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow: hidden
}

@media (max-width:1000px){
  body{
    overflow: auto;
  }
}
  
`;