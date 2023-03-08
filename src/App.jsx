import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import About from "./routes/about";
import Meteo from "./routes/meteo";
import Home from "./routes/home";
import Navbar from './navbar';
import { Link } from "react-router-dom"
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
  const [coins, setCoins] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  async function fetchCoins() {
    try {
      const { data } = await axios.get('https://api.coinstats.app/public/v1/coins?limit=10');
      //console.log(data.coins);
      setCoins(data.coins);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>Ошибка при получении данных</h1>
  }

  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Navbar></Navbar>
            <Container>
              <Routes>
                <Route index path="/" element={<Home data={coins} />} />
                <Route exact path="/meteo" element={<Meteo />} />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </Container>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>

      </div>
    </>
  );
}

export default App;
