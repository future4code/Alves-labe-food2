import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext';
import CardRestaurantes from '../../components/cards/cardRestaurantes/CardRestaurantes';
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import InputBusca from '../../components/InputBusca/InputBusca';
import { goToBusca, goBack, goToDetail } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import * as C from './styled'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import restaurantImg from '../../assets/active-homepage.png'
import shoppingCartImg from '../../assets/shopping-cart.png'
import avatarImg from '../../assets/avatar.png'
// import CardPedido from '../../components/cards/cardPedidoFeito'

const TelaRestaurantes = (props) => {

  const { states, setters } = useContext(GlobalContext)
  const [resultadoBusca, setResultadoBusca] = useState("")
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    switch (value) {
      case 0:
        setCategory('Todos')
        break
      case 1:
        setCategory('Árabe')
        break
      case 2:
        setCategory('Asiática')
        break
      case 3:
        setCategory('Hamburguer')
        break
      case 4:
        setCategory('Italiana')
        break
      case 5:
        setCategory('Sorvetes')
        break
      case 6:
        setCategory('Carnes')
        break
      case 7:
        setCategory('Baiana')
        break
      case 8:
        setCategory('Petiscos')
        break
      case 9:
        setCategory('Mexicana')
        break
    };
  
  })

  const pegarId = (id) => {
    setters.setId(id)
    console.log(id)
    goToDetail(navigate, id)
  }

  const onChangeBusca = (e) => {
    setResultadoBusca(e.target.value)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const chooseCard = () => {
    const card = states.restaurantes?.map((rest) => {
      if (rest.category == category) {
        return (
          <CardRestaurantes key={rest.id} restaurantes={rest} />
        )
      } if (category == "Todos") {
        return (
          <CardRestaurantes key={rest.id} restaurantes={rest} />
        )
      }
    })
    return card
  }

  // const pedidoFeito = () => {
  //   if (states.pedidoFeito.length !== 0) {
  //     return <CardPedido />
  //   }
  // }


  return (
    <C.Container>
      <Header
        backButton={<img src={backButton} onClick={() => goBack(navigate)} />}
        name="FutureEats"
      />

      <C.ContainerInput onClick={() => goToBusca(navigate)}>
        <InputBusca />
      </C.ContainerInput>


      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="scrollable prevent tabs example"
            variant="scrollable"
            scrollButtons={false}
          >
            <Tab label="Todos" {...a11yProps(0)} />
            <Tab label="Árabe" {...a11yProps(1)} />
            <Tab label="Asiática" {...a11yProps(2)} />
            <Tab label="Hamburguer" {...a11yProps(3)} />
            <Tab label="Italiana" {...a11yProps(4)} />
            <Tab label="Sorvetes" {...a11yProps(5)} />
            <Tab label="Carnes" {...a11yProps(6)} />
            <Tab label="Baiana" {...a11yProps(7)} />
            <Tab label="Petiscos" {...a11yProps(8)} />
            <Tab label="Mexicana" {...a11yProps(9)} />
          </Tabs>
        </Box>
        <C.ContainerRestaurantes>
          <TabPanel value={value} index={0}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={1} >
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={4}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={5}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={6}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={7}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={8}>
            {chooseCard()}
          </TabPanel>
          <TabPanel value={value} index={9}>
            {chooseCard()}
          </TabPanel>
        </C.ContainerRestaurantes>
      </Box>

      <Footer
        restaurantImg={restaurantImg}
        shoppingCartImg={shoppingCartImg}
        avatarImg={avatarImg}
      />
    </C.Container>
  );
};

export default TelaRestaurantes;
