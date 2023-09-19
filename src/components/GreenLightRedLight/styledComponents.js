import styled from "styled-components"

export const BoxContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 60px;`

export const MainContainer = styled.div`
width: 250px;
height: 250px;
background-color: ${props => props.color};
color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const StartGameBtn = styled.button`
line-height: 2;
width: auto;
color: #ffffff;
background-color: ${props => props.color};
border-radius: 3px;
border-width: 0px;
margin-right: 3px;`

export const Count = styled.p`
color: green;
font-size: 22px;
font-weight: bold;`

export const ShowResultContaintainer = styled.div`
padding: 20px;
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 24px;`