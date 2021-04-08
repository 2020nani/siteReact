import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: skyblue
`
export const Conteudo = styled.div`
width: 96vw;
text-align: center;
display: flex;
@media (max-width:400px) {
    max-width:300px
  }
ul{
    width:300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin: 10px;
    background: white

}
    
button{
    background: #5F9EA0
    border: 0;
    border-radius: 4px;
    height: 45px;
    font-weight: bold;
    color: white;
    padding: 0 15px;
    color: black;
    margin:10px;
    font-size:14px
   
    &::placeholder{
    color: (240, 248, 255, 0.1)
    }
}
`