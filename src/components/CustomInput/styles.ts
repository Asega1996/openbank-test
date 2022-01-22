import { InputLabel, inputLabelClasses } from "@mui/material";
import theme from "@Styles/theme";
import styled from "styled-components";

export const SCInputLabel = styled(InputLabel)`
    &.${inputLabelClasses.root} {
        color: ${theme.palette.secondary.dark};
        font-family: ${theme.typography.fontFamily};
        font-weight: 700;
        padding-bottom: 0.5rem;
    }
`