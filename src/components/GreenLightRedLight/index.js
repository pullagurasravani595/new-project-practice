import {Component} from 'react'
import {BoxContainer, MainContainer, StartGameBtn, Count, ShowResultContaintainer, ButtonContainer} from './styledComponents'

class GreenLightRedLight extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0, color: "green", results: ""}
    }

      componentWillUnmount() {
        clearInterval(this.timerID)
        clearInterval(this.intervalId)
        
      }

      easyDifficultyLevel = () => {
        const {count, results} = this.state
        if (count === 10) {
            this.setState({results: "you win"})
            clearInterval(this.intervalId)
            clearInterval(this.timerID)
        }
        return <Count>{results}</Count>
      }

      mediumDifficultyLevel = () => {
        const {count, results} = this.state
        if (count === 15) {
            this.setState({results: "you win"})
            clearInterval(this.intervalId)
            clearInterval(this.timerID)
        }
        return <Count>{results}</Count>
      }

      hardDifficultyLevel = () => {
        const {count, results} = this.state
        if (count === 25) {
            this.setState({results: "you win"})
            clearInterval(this.intervalId)
            clearInterval(this.timerID)
        }
        return <Count>{results}</Count>
      }

      showResults = () => {
        const {details} = this.props
        console.log(details);

        switch(details) {
            case "Easy":
                return this.easyDifficultyLevel()
            case "Medium":
                return this.mediumDifficultyLevel()
            case "Hard":
                return this.hardDifficultyLevel()  
            default:
                return null  
            }
      }
    
     changeColor = () => {
        const colorsList = ["green", "red"]
        const colorVal = colorsList[Math.floor(Math.random() * colorsList.length)]
        this.setState(prevState => ({seconds: prevState.seconds + 1, color: colorVal}))
     }

    onClickRedBox = () => {
        this.setState({results: "over game"}) 
        clearInterval(this.timerID)
        clearInterval(this.intervalId)  
    }

    onClickStartGame = () => {
        this.timerID = setInterval(this.changeColor, 1000);
    }

    incrementCount = () => {
        this.intervalId = setInterval(this.increaseCount, 1000)
    }

    increaseCount = () => {
        this.setState(prevState => ({count: prevState.count+1}))
    }

    
    render() {
        const {color, count} = this.state
        return(
            <BoxContainer>
                <MainContainer color={color} onClick={this.onClickBox}>{color}</MainContainer>
                <ButtonContainer>
                    <StartGameBtn type='button' onClick={this.onClickStartGame} color="blue">start game</StartGameBtn>
                    <StartGameBtn type="button" onClick={this.onClickRedBox} color="red">red Box </StartGameBtn>
                    <StartGameBtn type="button" onClick={this.incrementCount} color="green">green Box</StartGameBtn>
                </ButtonContainer>
                <Count>count: {count}</Count>
                <ShowResultContaintainer>{this.showResults()}</ShowResultContaintainer>
            </BoxContainer>
        )
               
    }
}

export default GreenLightRedLight