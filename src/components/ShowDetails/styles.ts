import styled from "@emotion/styled";

export const ShowTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: 0;
`;

export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const Summary = styled.div``;

export const Image = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-right: ${({ theme }) => theme.spacing.lg};
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 33%;
  }
`;

export const Meta = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: 0;
`;
