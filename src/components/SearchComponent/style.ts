import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const Form = styled.form`
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints.md}) {
    column-gap: ${({ theme }: { theme: Theme }) => theme.spacing.lg};
    display: flex;
  }
`;

export const Input = styled.input`
  appearance: none;
  background-color: ${({ theme }: { theme: Theme }) => theme.color.text};
  color: ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  border: 0;
  font-size: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  border: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 15px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 20%;
  }
`;
