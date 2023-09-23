// Write your code here
import {Component} from 'react'
import './index.css'

const imageUrlList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    imgUrl: imageUrlList[0].imageUrl,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickBtn = () => {
    const {imgUrl, total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        imgUrl: imageUrlList[0].imageUrl,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        imgUrl: imageUrlList[1].imageUrl,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails, imgUrl} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="image" src={imgUrl} alt="toss result" />
          <button className="btn" type="button" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score-para">Total: {total}</p>
            <p className="score-para">Heads: {heads}</p>
            <p className="score-para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
