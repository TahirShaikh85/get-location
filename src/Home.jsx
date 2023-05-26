import React from 'react'
import indeed from './assets/indeed.png'

const Home = () => {

    const handleGetLocation = async () => {
        console.log("clicked")
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude)
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    
          fetch(url).then(res => res.json()).then(data => {
            console.table(data.address)
          })
            .catch(() => {
              console.log("error occured")
            })
    
          const serverUrl = `https://wt-significant-honduras-direct.trycloudflare.com/api/sendLocation`;
    
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ latitude, longitude })
          }
    
          const sendLocation = fetch(serverUrl, config)
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })
            .catch(() => {
              console.log("Error while posting data")
            })
        })
      }

    return (
        <div>
            <nav className="navbar navbar-main navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={indeed} alt="" /></a>
                    <button>Sign in</button>
                </div>
            </nav>
            <nav className="navbar navbar-sub navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Career Guide</a>
                    <h3>Find jobs in Medical field</h3>
                </div>
            </nav>
            <section id="main-wrapper">
                <button id="location-button" onClick={handleGetLocation}>Search jobs in Loni</button>
            </section>
        </div>
    )
}

export default Home