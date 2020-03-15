import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex:1;
  align-items:center;
  margin-right:20px;

@media (max-width:800){
  Container{
    width:500px;
    margin:0px;
  }
}
`;
