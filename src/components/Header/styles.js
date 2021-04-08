import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:flex-end;
align-items:center
width:100vw;
height: 50px;
margin-top:1vh;
margin:0;
background: black
button{
  width:100px;
  height: 30px
  font-size: 18px;
  margin-right: 10px;
  color: white;
  border: none
  background: none
}
button:hover{
  color: gray
}

`
export const ConteudoLogado = styled.div `
display:flex;
justify-content:space-between;
align-items:center
width: 500px
span{
  color: white
}
button{
  width:100px;
  height: 30px
  font-size: 18px;
  margin-right: 10px;
  color: white;
  border: none
  background: none
}
button:hover{
  color: gray
}
`


