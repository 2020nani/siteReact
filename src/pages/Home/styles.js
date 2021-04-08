import styled from 'styled-components';
import banner from '../../assets/banner.png'
export const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
background-image: url(${banner});
background-repeat: no-repeat;
background-size: cover
`
export const Conteudo = styled.div`
width: 50vw;
display:flex;
flex-direction:column
margin-top:200px;
h1{
    font-size: 3rem
}
h2{
    font-size: 2rem
}
form{
    display: flex;
    margin: 20px;
   
}
input {
    width: 400px;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 45px;
    padding: 0 15px;
    color: black;
    margin-top: 2vh;

    &::placeholder{
    color: (240, 248, 255, 0.1)
    }
}
    
button{
    margin-left: 20px;
    background: #5F9EA0
    border: 0;
    border-radius: 4px;
    height: 45px;
    font-weight: bold;
    color: white;
    padding: 0 15px;
    color: black;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size:14px

    &::placeholder{
    color: (240, 248, 255, 0.1)
    }
}
`
export const Texto = styled.div`
margin-left: 20px
`
