import styled from "@emotion/styled";

export const Show = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ShowTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: 0;
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spacing.sm};
  max-width: 100%;
`;
