import { LiaCopyrightSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import './App.css';

function App() {
  const data = [
    { name: 'Pranjal', serviceName: 'PM', date: '2011/11/28', profit: '$162,700' },
    { name: 'paritosh', serviceName: 'PM', date: '2007/10/09', profit: '$1,200,000' },
    { name: 'palav', serviceName: 'B2b', date: '2009/01/12', profit: '$86,000' },
    { name: 'Moumita', serviceName: 'HR', date: '2012/10/13', profit: '$132,000' },
    { name: 'Mitesh', serviceName: 'Graphics', date: '2011/06/07', profit: '$206,850' },
    { name: 'Srinivas', serviceName: 'Frontend', date: '2012/12/02', profit: '$372,000' },
    { name: 'hritik', serviceName: 'Graphics', date: '2011/05/03', profit: '$163,500' },
    { name: 'abc', serviceName: 'HR', date: '2011/12/12', profit: '$106,450' },
    { name: 'xyz', serviceName: 'B2b', date: '2011/12/06', profit: '$145,600' },
    { name: 'bcd', serviceName: 'B2b', date: '2012/03/29', profit: '$433,060' }
  ];
  return (
    <div className="App">
      <div className="header">
        <div className="go-business-logo">
        <img src='https://i.postimg.cc/94KQqKCC/Ellipse-83.png' alt='Ellipse-83' className='eclipse-83'/>
        <h1 className="heading-gobusiness">Go Business</h1>
        <img src='https://i.postimg.cc/8F9LPZYr/Ellipse-82.png'  alt='Ellipse-82' className='eclipse-82' />
        </div>
        <div className='headers-items'>
          <p className="item">Home</p>
          <p className="item">About Us</p>
          <p className="item">Courses</p>
          <p className="item">Projects</p>
          <p className="item">Contact</p>
        </div>
        <button className='try-btn'>Try for free</button>
      </div>
      <div className='referral-dashboard'>
        <h1 className="referral-heading">Referral Dashboard</h1>
        <div className='search-cont'>
        <img src='https://i.postimg.cc/0MnBb6TS/XMLID-223.png'  alt='XMLID-223' className='search-image'/>
        <input type="search" placeholder='Search here...' className='search-box'/>
        </div>
        <button className='search-button'>Search</button>
        <img src='https://i.postimg.cc/wy1wTWQC/Notifications.png' alt='Notifications' className='notification-image'/>
        <img src='https://i.postimg.cc/75C1zC2z/Rectangle-1393.png'  alt='Rectangle-1393' className='notification-image'/>
        <div className='profile-cont'>
          <p className='name'>Name</p>
          <p className='admin'> Admin</p>
        </div>
        <img src='https://i.postimg.cc/QHSs7C3j/Shape.png' alt='Shape' className='down-arrow-image'/>
      </div>
      <div className='money-cards'>
        <div className='money-card'>
          <img src='https://i.postimg.cc/PC2m0Wn0/002-cash-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>$9,568.00</p>
            <p className='price-desc'>Total Balance</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/PvNXrv63/003-credit-card-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>60%</p>
            <p className='price-desc'>Discount Percentage</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/0bgFNJHz/001-donation-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>300</p>
            <p className='price-desc'>Total Referral</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/L6GrDr6m/004-hourglass-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>$300</p>
            <p className='price-desc'>Discount Amount</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/85ry7CMW/005-percentage-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>$465.00</p>
            <p className='price-desc'>Commision Amount</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/YCn88FxY/006-wage-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>$158.00</p>
            <p className='price-desc'>Total Earning</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/KjxnmcNm/007-referral-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>40%</p>
            <p className='price-desc'>Commision Discount</p>
          </div>
        </div>
        <div className='money-card'>
          <img src='https://i.postimg.cc/qvvHz8R3/008-transfer-png.png'  alt='002-cash-png' className='money-image'/>
          <div className='price-cont'>
            <p className='price'>$534.00</p>
            <p className='price-desc'>Total Bank Transfer</p>
          </div>
        </div>
      </div>
      <div className='referrals-cont'>
        <div className='service'>
          <p className='services-heading'>Service</p>
          <p className='service-para'>some service</p>
        </div>
        <div className='service'>
          <p className='services-heading'>Your Referrals</p>
          <p className='service-para service-para1'>0+&nbsp;&nbsp;&nbsp;&nbsp;0</p>
        </div>
        <div className='service'>
          <p className='services-heading'>Active Referrals</p>
          <p className='service-para service-para1'>0+&nbsp;&nbsp;&nbsp;&nbsp;0</p>
        </div>
        <div className='service'>
          <p className='services-heading'>Total Ref.Earnings</p>
          <p className='service-para service-para1'>$0.00</p>
        </div>
      </div>
      <div className='refer-friends-underline'>
        <h1 className='refer-friends'>Refer Friends And Earn More  !!</h1>
        <div className="underline"></div>
      </div>
      <div className='referal-link'>
      <h1 className='refer-friends'>Your Referral Link</h1>
      <h1 className='refer-friends refer-friends-space'>Your Referral Code</h1>
      </div>
      <div className='referal-link-input'>
      <input type="text" placeholder='https://gobusiness.com/?refferal=ABCXYZ' className='referal-text'/>
      <button className='copy-btn'><img src='https://i.postimg.cc/wvptN6GZ/Symbol.png' alt='Symbol' className="copy-icon"/> Copy</button>
      <input type="text" placeholder='ABCXYZ' className='referal-text1'/>
      <button className='copy-btn'><img src='https://i.postimg.cc/wvptN6GZ/Symbol.png' alt='Symbol' className="copy-icon"/> Copy</button>
      </div>
      <div className="entries-search">
        <div className="show-entries-no">
        <p className="show">Show</p>
        <div className="entries-border"><p className="entries-no">10</p></div>
        <p className="show entries">Entries</p>
        </div>
        <div className="search-entries">
          <p className="show">Search</p>
          <input type="search" className="search-input" />
        </div>
      </div>
      <table className="data-table"> 
      <thead>
        <tr className="table-head">
          <th className="name-head">Name</th>
          <th className="service-head">Service Name</th>
          <th className="service-date">Date</th>
          <th className="service-profit">Profit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="table-row">
            <td>{item.name}</td>
            <td>{item.serviceName}</td>
            <td>{item.date}</td>
            <td>{item.profit}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="prev-next">
      <p className="show">Showing 1 to 10 of 57 entries</p>
      <div className="buttons">
      <button className="previous-btn">Previous</button>
      <button className="number-btn highlighted">1</button>
      <button className="number-btn">2</button>
      <button className="number-btn">3</button>
      <button className="number-btn">4</button>
      <button className="number-btn">5</button>
      <button className="number-btn">6</button>
      <button className="previous-btn">Next</button>
      </div>
    </div>
      <div className="company-information">
        <div className='company'>
          <p className='company-heading'>COMPANY</p>
          <p className='company-details'>About</p>
          <p className='company-details'>Premium</p>
          <p className='company-details'>Blog</p>
          <p className='company-details'>Referral Program</p>
        </div>
        <div className='company'>
          <p className='company-heading'>HELP AND SUPPORT</p>
          <p className='company-details'>Contact Us</p>
          <p className='company-details'>Knowledge Center</p>
          <p className='company-details'>Premium Support</p>
          
        </div>
        <div className='company'>
          <p className='company-heading'>LEARNING</p>
          <p className='company-details'>Learning Hub</p>
          <p className='company-details'>Tutorials</p>
          <p className='company-details'>Communities</p>
         
        </div>
        <div className='company'>
          <p className='company-heading'>RESOURCES</p>
          <p className='company-details'>Third-Part Tools</p>
          <p className='company-details'>Illustrations</p>
          <p className='company-details'>Stock Photos</p>
          
        </div>
        <div className='company'>
          <p className='company-heading'>LEGAL</p>
          <p className='company-details'>Privacy Policy</p>
          <p className='company-details'>Terms & Conditions</p>
          <p className='company-details'>EULA</p>
        </div>
      </div>
      <div className='footer'>
      <div className="go-business-logo1">
        <img src='https://i.postimg.cc/94KQqKCC/Ellipse-83.png' alt='Ellipse-83' className='eclipse-83'/>
        <h1 className="heading-gobusiness">Go Business</h1>
        <img src='https://i.postimg.cc/8F9LPZYr/Ellipse-82.png'  alt='Ellipse-82' className='eclipse-82' />
        </div>
        <div className="copyrights">
        <LiaCopyrightSolid size={25}/>
        <p className="copyrights-text">2024 Go Business, Inc. All rights reserved.</p>
        </div>
        <div className="social-icons">
        <ImLinkedin size={25} style={{marginRight: '10px'}}/>
        <FaFacebookF size={25} style={{marginRight: '10px'}}/>
        <FaInstagram size={25} style={{marginRight: '10px'}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
