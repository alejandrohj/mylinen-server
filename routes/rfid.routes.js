const express = require('express');
const router  = express.Router();

const axios = require('axios');

const SerialsModel = require('../models/serials.model');
const EnvioModel = require('../models/envio.model');
const LineaEnvioModel = require('../models/lineaenvio.model');
const SerialsLineaEnvio = require('../models/serials_lineaenvio');
const Laundries = require('../models/laundry.model');

/* GET home page */
router.put('/albaranes', (req, res, next) => {
  const {sqlquery} = req.body;
  console.log(sqlquery);
  axios.put(`https://smartlinens.loca.lt/sqlquery`,{sqlquery: sqlquery},{withCredentials: true})
  .then((response)=>{
    res.status(200).json(response.data);
  })
  
});

router.get(`/albaran/:id`,(req,res) =>{
  const id = req.params.id;
  axios.get(`https://smartlinens.loca.lt/albaran/${id}`,{withCredentials: true})
  .then((response)=>{
    res.status(200).json(response.data);
  })
})

router.get(`/cliente/:id/stock`,(req,res) =>{
  const id = req.params.id;
  axios.get(`https://smartlinens.loca.lt/cliente/${id}/stock`,{withCredentials: true})
  .then((response)=>{
    res.status(200).json(response.data);
})
})
/**/

///RFID SERVER HTTP REQUESTS
router.put('/articulos/all', (req, res, next) => {
  const {articulos} = req.body;
  console.log(articulos)
  Laundries.deleteMany({})
  .then(()=>{
    Laundries.insertMany(articulos)
    .then((DBResponse)=>{
      console.log('serials created succesfully')
      res.status(200).json(DBResponse.data);
    })
  })
});

router.put('/serials/all', (req, res, next) => {
  const {serials} = req.body;
  console.log(serials)
  SerialsModel.deleteMany({})
  .then(()=>{
    SerialsModel.insertMany(serials)
    .then((DBResponse)=>{
      console.log('serials created succesfully')
      res.status(200).json(DBResponse.data);
    })
  })
});

router.put('/envios/all', (req, res, next) => {
  const {envios} = req.body;
  console.log(envios)
  EnvioModel.deleteMany({})
  .then(()=>{
    EnvioModel.insertMany(envios)
    .then((DBResponse)=>{
      console.log('serials created succesfully')
      res.status(200).json(DBResponse.data);
    })
  })
});

router.put('/lineaenvio/all', (req, res, next) => {
  const {lineaenvio} = req.body;
  console.log(lineaenvio)
  LineaEnvioModel.deleteMany({})
  .then(()=>{
    LineaEnvioModel.insertMany(lineaenvio)
    .then((DBResponse)=>{
      console.log('serials created succesfully')
      res.status(200).json(DBResponse.data);
    })
  })
});

router.put('/serialslineaenvio/all', (req, res, next) => {
  const {serialslineaenvio} = req.body;
  const arrLengthDiv3 = serialslineaenvio.length/10;
  const serialslineaenvio1 = serialslineaenvio.slice(0,arrLengthDiv3)
  const serialslineaenvio2 = serialslineaenvio.slice(arrLengthDiv3,arrLengthDiv3*2)
  const serialslineaenvio3 = serialslineaenvio.slice(arrLengthDiv3*2,arrLengthDiv3*3)
  const serialslineaenvio4 = serialslineaenvio.slice(arrLengthDiv3*3,arrLengthDiv3*4)
  const serialslineaenvio5 = serialslineaenvio.slice(arrLengthDiv3*4,arrLengthDiv3*5)
  const serialslineaenvio6 = serialslineaenvio.slice(arrLengthDiv3*5,arrLengthDiv3*6)
  const serialslineaenvio7 = serialslineaenvio.slice(arrLengthDiv3*6,arrLengthDiv3*7)
  const serialslineaenvio8 = serialslineaenvio.slice(arrLengthDiv3*7,arrLengthDiv3*8)
  const serialslineaenvio9 = serialslineaenvio.slice(arrLengthDiv3*8,arrLengthDiv3*9)
  const serialslineaenvio10 = serialslineaenvio.slice(arrLengthDiv3*9,arrLengthDiv3*10)
  console.log(serialslineaenvio.length, 'totl')
  console.log(serialslineaenvio1.length)
  console.log(serialslineaenvio2.length)
  console.log(serialslineaenvio3.length)
  console.log(serialslineaenvio4.length)
  console.log(serialslineaenvio5.length)
  SerialsLineaEnvio.deleteMany({})
  .then(()=>{
    SerialsLineaEnvio.insertMany(serialslineaenvio1)
    .then(()=>{
      console.log('1')
      SerialsLineaEnvio.insertMany(serialslineaenvio2)
      .then((DBResponse)=>{
        console.log('2')
        SerialsLineaEnvio.insertMany(serialslineaenvio3)
        .then((DBResponse)=>{
          console.log('3')
          SerialsLineaEnvio.insertMany(serialslineaenvio4)
          .then((DBResponse)=>{
            console.log('4')
            SerialsLineaEnvio.insertMany(serialslineaenvio5)
            .then((DBResponse)=>{
              console.log('5')
              SerialsLineaEnvio.insertMany(serialslineaenvio6)
              .then((DBResponse)=>{
                console.log('6')
                SerialsLineaEnvio.insertMany(serialslineaenvio7)
                .then((DBResponse)=>{
                  console.log('7')
                  SerialsLineaEnvio.insertMany(serialslineaenvio8)
                  .then((DBResponse)=>{
                    console.log('8')
                    SerialsLineaEnvio.insertMany(serialslineaenvio9)
                    .then((DBResponse)=>{
                      console.log('9')
                      SerialsLineaEnvio.insertMany(serialslineaenvio10)
                      .then((DBResponse)=>{
                        console.log('10')
                        console.log('serials created succesfully')
                        res.status(200).json(DBResponse.data);
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});


///WEB CLIENT HTTP REQUESTS
router.get(`/customer/:id/stock`,(req,res) =>{
  let artArr = [];
  const id = req.params.id;
  SerialsModel.find({cliente_id: id})
  .then((tagsResponse)=>{
    Laundries.find()
    .then((laundriesResponse)=>{
      laundriesResponse.map((laundry)=>{
        let acumulator = 0;
        tagsResponse.map((currentValue)=>{
          if(currentValue.articulo_id === laundry.rfidid){
            acumulator++;
          } 
        })
        let obt = {articulo: laundry.name, cantidad: acumulator}
        artArr.push(obt);
      })
      res.status(200).json(artArr);
    })
  })
})

module.exports = router;
