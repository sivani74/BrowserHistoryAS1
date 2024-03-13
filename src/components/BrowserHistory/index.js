import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    latestHistoryList: initialHistoryList,
    isListEmpty: false,
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {latestHistoryList} = this.state
    const updatedHistory = latestHistoryList.filter(
      eachItem => eachItem.id !== id,
    )

    if (updatedHistory.length === 0) {
      this.setState({latestHistoryList: updatedHistory, isListEmpty: true})
    } else {
      this.setState({latestHistoryList: updatedHistory})
    }
  }

  render() {
    const {searchInput, latestHistoryList} = this.state
    let {isListEmpty} = this.state
    const searchResults = latestHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (searchResults.length === 0) {
      isListEmpty = true
    }
    return (
      <div className="app-container">
        <nav className="nav-bar">
          <div className="logo-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search history"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                className="search-input"
              />
            </div>
          </div>
        </nav>
        {!isListEmpty && (
          <div className="list-container">
            <ul className="history-list-container">
              {searchResults.map(eachItem => (
                <HistoryItem
                  HistoryItemDetails={eachItem}
                  key={eachItem.id}
                  onDeleteHistory={this.onDeleteHistory}
                />
              ))}
            </ul>
          </div>
        )}
        {isListEmpty && (
          <div className="no-history-container">
            <p>There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default BrowserHistory
