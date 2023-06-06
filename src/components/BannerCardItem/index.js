// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} list-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description-text">{description}</p>
        <button type="button" className="show-more-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
