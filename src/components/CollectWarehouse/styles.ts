import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 16px;

  background: #f4f4f8;

  a {
    color: #f4f4f8;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
