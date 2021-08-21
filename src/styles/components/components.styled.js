import styled from 'styled-components'

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    align-items: ${(props) => props.alignItems || 'stretch'};
    flex-direction: ${(props) => props.flexDirection || 'row'};
`