import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display:flex;
  flex:1;
  justify-content:center;
  align-content:center
`;

export const Divbutton = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 0 50px 30px
 `;

export const Card = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  width: 100%;
  height: 550px;
  background: #f5efff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02), 0 0 14px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 0px 20px;
  margin:80px 50px;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const Navigate = styled.button`
  width: 20%;
  height:30px;
  border: 2px solid #8D86C9 ;
  margin-top: 50px;
  background:  #8D86C9 ;
  border-radius: 100px;
  padding: 0px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  outline:none;

  :hover{
    background: ${shade(0.1, '#8D86C9')};
    color:#fff
  }
  :active{
    transform: translateY(-5px);
    transition: all 0.2s;
  }

  @media (max-width: 1000px) {
    height: auto;
    width: auto;
    padding:5px
  }
`;

export const Divcontent = styled.div`
  display:flex;
  flex:1;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: #644789;
  align-self:center;
`;

export const Form = styled.form`
display: flex;
flex: 1;
margin-top:25px;
flex-direction: column;
`;

export const Inputblock = styled.div`
  display:flex;
  flex-direction: column;
  margin: 20px;
  margin-left:50px;
  width:70%
`;

export const Select = styled.select`
  width: 80%;
  height: 32px;
  font-size: 15px;
  color: #a594f9;
  border: 0;
  background:#f5efff;
  outline:none;
  border-bottom: 2px solid #e5d9f2;
`;
export const SubmitButton = styled.button`
  align-self:flex-start;
  width: auto;
  height:30px;
  border: 2px solid #8D86C9 ;
  margin-top: 50px;
  background:  transparent ;
  border-radius: 100px;
  padding: 0px;
  font-size: 16px;
  font-weight: bold;
  color: #8D86C9;
  cursor: pointer;
  transition: background 0.2s;
  outline:none;
  padding:5px;

  :hover{
    background: ${shade(0.1, '#f5efff')};
    color:#8D86C9
  }
  :active{
    transform: translateY(-5px);
    transition: all 0.2s;
  };
 

`;


export const Label = styled.label`
  color: #644789;
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom:5px
`;

export const DivChart = styled.div`
display: flex;
flex: 1;
flex-direction: column;
`;

