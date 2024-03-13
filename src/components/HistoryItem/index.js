import './index.css'

const HistoryItem = props => {
  const {HistoryItemDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryItemDetails

  const onClickDeleteButton = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="time-title-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-title-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domail-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={onClickDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default HistoryItem
