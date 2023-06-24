import React, { useState ,useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import Footer from "./Footer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Welcome from 'react-welcome-page'
import Snackbar from '@material-ui/core/Snackbar';
import Detail from "./Detail";
import Caterory from "./Caterory";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '54f2940a96mshe339e44c1a39731p130b2fjsnd1a3c398a18d',
		'X-RapidAPI-Host': 'netflix-api3.p.rapidapi.com'
	}
};



const List = () => {
  const [stext, setstext] = useState("avengers");
  // const [feel, setFeel] = useState('fun')
  const [result, setresult] = useState([]);
  const [result2, setresult2] = useState([]);
  const [open, setOpen] = React.useState(false);
  
  const [detailbool, setdetailbool] = useState(false);
  const [imval, setimval] = useState();

  const showChange = (event) => {
    setstext(event.target.value.toLowerCase());
    
  };
  const show = () => {
    // fetch('https://netflix-api3.p.rapidapi.com/year/2018', options)
    //   .then(response => response.json())
    //   .then(response => {
        
    //     const listIn = []
    //     for( let i = 0; i < response.length; i++){
    //       if(response[i].listedIn.toLowerCase().includes(`${stext}`)) {
    //         listIn.push(response[i])
    //       }
    //     }
    //     setresult(listIn)
    //     console.log(listIn)
    //     show2()
    //   })
    //   .catch(err => console.error(err))

    axios
      .get(`https://www.omdbapi.com/?apikey=4eb65943&s=${stext}`)
      .then((res) => {
        console.log(typeof(res.data))
        setresult(res.data.Search.map((p) => p));
      })
      .catch((error) => {
        //alert("No search results found!! check for spelling ");
        setOpen(true);
      });
      show2();

     
  };

  const show2 = () => {
    // fetch('https://netflix-api3.p.rapidapi.com/year/2018', options)
    //   .then(response => response.json())
    //   .then(response => {
        
    //     const listIn = []
    //     for( let i = 0; i < response.length; i++){
    //       if(response[i].listedIn.toLowerCase().includes(`${stext}`)) {
    //         listIn.push(response[i])
    //       }
    //     }
    //     setresult2(listIn)
    //   })
    //   .catch(err => console.error(err))


    // axios
    // .get(`https://www.omdbapi.com/?apikey=5fcb333a&s=${stext}&page=1`)
    // .then((res) => {
    //   setresult2(res.data.Search.map((s) => s));
    // })
    // .catch((error) => {
     
    // });
    
      

  };
  function showDetail(i) {
    setdetailbool(true);
    setimval(i);
  }
  //to toggle boolean
  function funsetdetailbool() {
    setdetailbool(false);
  }
  
  useEffect(() => {
    show();
  }, [result]);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleHome = () => {
    setstext('avengers')
    show()
  }

  const showCaterory = () => {

  }

  const handleCaterory = () => {

  }

  return (
    <>
     <Welcome
		loopDuration={2000}
		data={[
		{
		
    image: require('./WatchAnyMovieLogo.png') ,
    imageAnimation: 'flip',
    backgroundColor: '#212121',
    // textAnimation: "flip",
    // textColor: 'white',
    // text:'Watch Any Movie'
    }
   
		// },
		// {
    //   image: require('./watchanymovie-logo.PNG') ,
    // imageAnimation: 'rotateIn',
    // backgroundColor: '#212121',
    // textAnimation: "fadeInUp",
    // textColor: 'white',
    // text:'Watch Any Movie'
		// },
		// { 
    //   image: require('./watchanymovie-logo.PNG') ,
    // imageAnimation: 'rotateIn',
    // backgroundColor: '#212121',
    // textAnimation: "fadeInUp",
    // textColor: 'white',
    // text:'Watch Any Movie'
		// }
	]}

/>
      <div>
        <ul className="Home">
          <li className="" onClick={handleHome}>Home</li>
          <li className="" onClick={handleCaterory}>Caterory</li>
        </ul>
      </div>
      <center>
        <div className=" navbar-dark bg-dark">
          <br />
          <input
            type="text"
            value={stext}
            onChange={showChange}
            placeholder="Search movies/series"
            style={{
              height: "65px",
              width: "250px",
              borderRadius: "5px",
              paddingLeft: "30px",
              color: "white",
              background: "#212121",
              border: "2px",
            }}
          />
          <Fab
            color="primary"
            aria-label="add"
            style={{
              background: "#b71c1c",
              borderRadius: "7px",
            }}
            onClick={show}
          >
            <SearchIcon  />
          </Fab>
          <br />
          <br />
        </div>
        <br />
        {/* <Display result={result}/> */}
        <center>
          <div className="resultContainer">
            {result.map((p) => (
              <div key={p.imdbID} onClick={() => showDetail(p.imdbID)}>
                <Card className="movieCard">
                  <CardActionArea>
                    <img className="moviePoster" src={p.Poster} alt={p.Title} />

                    <span
                      variant="contained"
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        borderRadius: "4px",
                      }}
                    >
                       {p.Year}
                    </span>
                    <div className="middle">
                      <div className="text">
                        <PlayCircleFilledIcon
                          className="playHoverIcon"
                          fontSize="large"
                          style={{ color: "#aa2e25", fontSize: "60px" }}
                        />
                      </div>
                    </div>
                    <div className="overlay">{p.Title}</div>
                  </CardActionArea>
                </Card>
              </div>
            ))}

            {/* result2 */}
            {result2.map((s) => (
              <div key={s.imdbID} onClick={() => showDetail(s.imdbID)}>
                <Card className="movieCard">
                  <CardActionArea>
                    <img className="moviePoster" src={s.Poster} alt={s.Title} />

                    <span
                      variant="contained"
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        borderRadius: "4px",
                      }}
                    >
                      <b> {s.Year}</b>
                    </span>
                    <div className="middle">
                      <div className="text">
                        <PlayCircleFilledIcon
                          className="playHoverIcon"
                          fontSize="large"
                          style={{ color: "#aa2e25", fontSize: "60px" }}
                        />
                      </div>
                    </div>
                    <div className="overlay">{s.Title}</div>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </center>
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        style={{marginTop:"20vh"}}
        message="No search results found !!"/>

        {detailbool ? (
          <Detail imval={imval} funsetdetailbool={funsetdetailbool} />
        ) : null}
      </center>
      <Footer />
    </>
  );
};
export default List;
