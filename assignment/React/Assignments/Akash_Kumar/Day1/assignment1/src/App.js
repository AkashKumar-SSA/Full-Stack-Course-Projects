// 1. User Card
// Build a component that shows
//     User name
//     Profile picture
//     About me
//     Contact info

import logo from './flag.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile_pic" style={{ backgroundImage: 'url(' + logo + ')', backgroundSize: 'auto' }}></div>
      
      <div className="important_details">
        <div className="user_name">Akash Kumar</div>
        <div className="contact_info">1234567890</div>
      </div>
      
      <div className="about_me">I am pursuing Btech computer science and engineering at Shobhit institute of engineering and Technology</div>
    </div>
  );
}

export default App;
