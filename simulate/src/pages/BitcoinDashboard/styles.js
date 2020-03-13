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
  background: #EAE8E5;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02), 0 0 14px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 0px 20px;
  margin:80px 50px
`;

export const Navigate = styled.button`
  width: 20%;
  height:30px;
  border: 2px solid #8D86C9 ;
  margin-top: 50px;
  background: #8D86C9;
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
`;

export const Form = styled.form`
  display:flex;
  flex:1;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center
`;