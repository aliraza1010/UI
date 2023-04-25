import './Header.css'
import mylogo from '../../assets/mylogo.jpeg'

const Header = () => {

  return (
    <nav className="header">
      <img src={mylogo} alt="" className='logo' />

      {/* DropDown for the Available Gyms */}
      <ul className='menu'>
        <li class="parent"><a href="/">Home</a></li>
        <li class="parent"><a href="#">Gyms</a><br />
          <ul class="child">

            <li><a href="/gym1">Gym1</a></li>
            <li><a href="/gym2">Gym2</a></li>
            <li><a href="/gym3">Gym3</a></li>
            <li><a href="/gym4">Gym4</a></li>
            <li><a href="/gym5">Gym5</a></li>
            <li><a href="/gym6">Gym6</a></li>

          </ul>
        </li>

        {/* dropdown for dietplan */}
        <li class="parent"><a href="target">DietPlans</a>
          <ul class="child">
            <li class="parent"><a href="/dietplan">Fat Loose <span class="expand">»</span></a>
              <ul class="child">
                <li><a href="/Kitto">Keto Diet</a></li>
                <li><a href="GMdiet">GM Diet</a></li>
                <li><a href="Regulardiet">Regular</a></li>
              </ul>
            </li>
            <li class="parent"><a href="/dietplan">Fat Gain <span class="expand">»</span></a>
              <ul class="child">
                <li><a href="Bulk">Bulk Diet</a></li>
                <li><a href="Fat">Fat Diet</a></li>
                <li><a href="Quick">Quick Diet</a></li>

              </ul>
            </li>
          </ul>
        </li>

        {/* dropdown for the Workout */}
        <li class="parent"><a href="#">Workout</a>
          <ul class="child">
            <li class="parent"><a href="/dietplan">Bulk <span class="expand">»</span></a>
              <ul class="child">
                <li><a href="biceps">Biceps</a></li>
                <li><a href="triceps">Triceps</a></li>
                <li><a href="shouder">Shoulder</a></li>
                <li><a href="back">Back</a></li>
                <li><a href="chest">Chest</a></li>
                <li><a href="legs">Legs</a></li>
              </ul>
            </li>
            <li class="parent"><a href="/dietplan">Lean <span class="expand">»</span></a>
              <ul class="child">
                <li><a href="biceps">Biceps</a></li>
                <li><a href="triceps">Triceps</a></li>
                <li><a href="shoulder">Shoulder</a></li>
                <li><a href="back">Back</a></li>
                <li><a href="chest">Chest</a></li>
                <li><a href="legs">Legs</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="parent"><a href="#about">About</a></li>
      </ul>

    </ nav >
  )
}
export default Header