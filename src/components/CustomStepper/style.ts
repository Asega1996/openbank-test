import { Step, StepConnector, StepLabel, Stepper } from '@mui/material'
import theme from '@Styles/theme'
import styled from 'styled-components'
import { stepConnectorClasses } from '@mui/material/StepConnector'

export const SCStepper = styled(Stepper)`
    background-color: transparent;
    align-items: center;
`

export const SCStep = styled(Step)`
    height: 100%;
    align-items: center;
    display: flex;
`

export const SCStepLabel = styled(StepLabel)`
    padding: 0rem 2rem;
    margin: auto;

    .MuiStepIcon-root {
        color: ${theme.palette.secondary.light};

        &.Mui-completed {
            color: ${theme.palette.primary.main};
            border-radius: 100%;
        }

        &.${stepConnectorClasses.active} {
            color: ${theme.palette.secondary.main};
            font-size: 1.75rem;
            -webkit-filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, .25));
        }
    }
`

export const SCConnector = styled(StepConnector)`
  &.${stepConnectorClasses.alternativeLabel} {
    top: 14px;
    left: calc(-50% + 13px);
    right: calc(50% + 13px);
    border-color: ${theme.palette.primary.main};
  }
  
  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      border-color: ${theme.palette.primary.main};
    },
  },
  &.${stepConnectorClasses.completed} {
    &.${stepConnectorClasses.line} {
      border-color: ${theme.palette.primary.main};
    },
  },

   &.${stepConnectorClasses.line} {
     &.${stepConnectorClasses.disabled} {
      border-color: ${theme.palette.secondary.light};
    },
  },

  .MuiStepConnector-line {
    border-color: inherit;
  }
`
