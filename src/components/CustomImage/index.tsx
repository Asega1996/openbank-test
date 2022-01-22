import styled from 'styled-components'
import { CustomImageProps } from './types'

const CustomImage = styled.img<CustomImageProps>`
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    display: ${(props) => props.display};
`

CustomImage.defaultProps = {
    margin: 'auto',
    width: 'inherit',
    display: 'block',
}

export default CustomImage
