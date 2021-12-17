import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  &:after {
    background-color: ${({ theme }) => theme.color.primary};

    content: "";
    display: block;
    height: 4px;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 99%;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: 36px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-top: 0;
`;
