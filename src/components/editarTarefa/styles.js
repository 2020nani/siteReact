import styled from 'styled-components';
export const Container = styled.div`
background: lightgrey;
width:100vw;
height: 100vh;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding-left:5vw;
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
h1{
  text-align:center
}
.formulario{
  margin-top: 5px;
  margin-left:10px;
  display:flex;
  width:700px;
  height:600px;
  flex-direction:column; 
  justify-content: center;
  align-items: center;
  background: white;
label{
    margin-top: 1vh;
}

input{
  width: 500px;
  margin-top: 1vh;
  height:6vh
  padding-left:5px
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
button{
  margin-top: 1vh;
  width: 20vw;
  height:4vh;
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
}

`
export const ButtonForm = styled.div`
display:flex;
justify-content: space-between;
align-items: center
`