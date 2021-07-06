const express = require('express');
const router  = express.Router();

const axios = require('axios');

const SerialsModel = require('../models/serials.model');
const EnvioModel = require('../models/envio.model');
const LineaEnvioModel = require('../models/lineaenvio.model');
const SerialsLineaEnvio = require('../models/serials_lineaenvio');
const Laundries = require('../models/laundry.model');
const PesosModel =  require('../models/pesos.model');
const ComplexModel = require('../models/complex.model');
const ArchModel = require('../models/rfid.arc.model');
const ShippingModel = require('../models/rfid.customer.shipping.model');
const PackageModel = require('../models/package.model.js');

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
      console.log('articulos created succesfully')
      res.status(200).json(DBResponse.data);
    })
  })
});

router.put('/serials/all', (req, res, next) => {
  const {serials, cliente_serials} = req.body;

  const serialsDiv = serials.length/5;
  const serials1 = serials.slice(0,serialsDiv)
  const serials2 = serials.slice(serialsDiv,serialsDiv*2)
  const serials3 = serials.slice(serialsDiv*2,serialsDiv*3)
  const serials4 = serials.slice(serialsDiv*3,serialsDiv*4)
  const serials5 = serials.slice(serialsDiv*4,serialsDiv*5)
  res.status(200);
  SerialsModel.deleteMany({})
  .then(()=>{
    SerialsModel.insertMany(serials1)
    .then((DBResponse)=>{
      console.log('Some serials inserted')
      SerialsModel.insertMany(serials2)
      .then((DBResponse)=>{
        console.log('half of serials created succesfully')
        SerialsModel.insertMany(serials3)
          .then((DBResponse)=>{
            SerialsModel.insertMany(serials4)
            .then((DBResponse)=>{
              SerialsModel.insertMany(serials5)
              .then((DBResponse)=>{
                console.log('serials created succesfully')
                res.status(200).json(DBResponse.data);
              })
            })
          })
      })
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
      console.log('envios created succesfully')
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
      console.log('lineenvio created succesfully')
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
                        console.log('serials_lineaenvio created succesfully')
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

router.put('/pesos/all', (req, res, next) => {
  const {bultos} = req.body;
  console.log('saving pesos')
  const bultosDiv = bultos.length/3;
  const bultos1 = bultos.slice(0,bultosDiv)
  const bultos2 = bultos.slice(bultosDiv,bultosDiv*2)
  const bultos3 = bultos.slice(bultosDiv*2,bultosDiv*3)
  res.status(200);
  PesosModel.deleteMany({})
  .then(()=>{
    PesosModel.insertMany(bultos1)
    .then((DBResponse)=>{
      PesosModel.insertMany(bultos2)
      .then((DBResponse)=>{
        PesosModel.insertMany(bultos3)
          .then((DBResponse)=>{
            console.log('Pesos created succesfully')
            res.status(200).json(DBResponse.data);
          })
      })
    })
  })
});


///WEB CLIENT HTTP REQUESTS
router.get(`/customer/:id/stock`,(req,res) =>{
  let artArr = [];
  const id = req.params.id;
  console.log(id)
  SerialsModel.find({cliente_id: id})
  .then((tagsResponse)=>{
    console.log(tagsResponse.length)
    Laundries.find()
    .then((laundriesResponse)=>{
      laundriesResponse.map((laundry)=>{
        let acumulator = 0;
        tagsResponse.map((currentValue)=>{
          if(currentValue.articulo_id === laundry.rfidid){
            acumulator++;
          } 
        })
        //Intentar incrementar el acumulador si encontramos tags en serials_cliente de ese cliente(id)
        let obt = {articulo: laundry.name, cantidad: acumulator}
        artArr.push(obt);
      })
      res.status(200).json(artArr);
    })
  })
})
router.get(`/customer/:id/stock/bydate`,(req,res) =>{
  res.setTimeout(5000000);
  let tagsByDateArr = [];
  let tagsByDateReducedArr = [];
  const id = req.params.id;
  console.log(id)
  SerialsModel.find({cliente_id: id})
  .then((tagsResponse)=>{
    console.log(tagsResponse.length)
    Laundries.find()
    .then((laundriesResponse)=>{
      console.log('stock by Date db requests done')
      res.status(200);
      tagsResponse.map((tag)=>{
        let currentlaundry = laundriesResponse.find((laundry)=>{
          return laundry.rfidid === tag.articulo_id;
        })
        const tagByDate = {laundry: currentlaundry.name, fullDate:tag.fechaalta, 
          day:tag.fechaalta.getDate(), month:tag.fechaalta.getMonth()+1 ,year:tag.fechaalta.getFullYear(),
          lavados: tag.nciclosrealizados};
        tagsByDateArr.push(tagByDate);
        tagsByDateArr.sort((a,b)=> new Date(b.fullDate)-new Date(a.fullDate));
      })
      console.log('stockBydateDone and pending to send to client')
      // for(let i=0; i<12; i++){
      //   let countByDate = tagsByDateArr.reduce((acc, currval)=>{
      //     if(currval.month==i){
      //       return acc+1;
      //     }
      //   })
      // }
      res.status(200).json(tagsByDateArr)
    })
  })
})



router.get(`/customer/:id/envios`,(req,res) =>{
  const id = req.params.id;
  console.log(id)
  EnvioModel.find({cliente_id: id})
  .then((response)=>{
    res.status(200).json(response);
  })
})

router.get(`/customer/:id/envios/:year/:month`,(req,res) =>{
  const {id,year,month} = req.params;
  console.log(id, month,year);
  let StartDate = new Date(`${year}-${month.padStart(2,0)}-01`);
  let EndDate =new Date(`${year}-${month.padStart(2,0)}-31`);
  console.log(StartDate,EndDate)
  EnvioModel.find({cliente_id:id, fecha : { $gte:StartDate, $lte:EndDate}})
  .then((response)=>{
    console.log(response)
    res.status(200).json(response);
  })
})

router.get(`/customer/envios/:year/:month`,(req,res) =>{
  const {year,month} = req.params;
  console.log(month,year);
  let StartDate = new Date(`${year}-${month.padStart(2,0)}-01`);
  let EndDate =new Date(`${year}-${month.padStart(2,0)}-31`);
  console.log(StartDate,EndDate)
  EnvioModel.find({fecha : { $gte:StartDate, $lte:EndDate}})
  .then((response)=>{
    console.log(response)
    res.status(200).json(response);
  })
})



router.get(`/customer/envio/:id`,(req,res) =>{
  let articulos = [];
  const id = req.params.id;
  Laundries.find()
  .then((laundries)=>{
    EnvioModel.find({id: id})
    .then((albresponse)=>{
      LineaEnvioModel.find({envio_id:id})
        .then((lineEnvioRes)=>{
          console.log(lineEnvioRes)
          lineEnvioRes.map((elem,i)=>{
            SerialsLineaEnvio.find({lineaenvio1_id:elem.id})
              .then((serialLineaEnvioRes)=>{
                //Se repiten articulos con determinadas cantidades debido a lecturas por separado...
                //Idea: Se podría recorer nuevamente el array articulos ir creando un clon y comparar.
                let articulo = {articulo: laundries.find(laundryelem => laundryelem.rfidid === elem.articulo_id), cantidad: serialLineaEnvioRes[0].cantidad};
                articulos.push(articulo);
                if(articulos.length === (lineEnvioRes.length)){
                  let albaran = {envio: albresponse, serial: articulos}
                  console.log(albaran)
                  res.status(200).json(albaran)
                }
              })
          })
        })
    })
  })
})

router.get(`/pesos/envio/:id`,(req,res) =>{
  const id = req.params.id;
  PesosModel.find({envio_id:id})
    .then((pesos)=>{
      res.status(200).json(pesos);
    })
})

//CUSTOMER ARCH REQUESTS//////////////////////////

router.put(`/package/new`,(req,res) =>{
  const serialsReaded = [];
  const serialsReadedToPackage = [];
  const epcs = req.body.firstRead;
  const shippingId = req.body.shippingId;
  
  ComplexModel.find()
    .then((complexes)=>{
      Laundries.find()
        .then((laundries)=>{
          SerialsModel.find({clave :{$in: epcs}})
          .then((serials)=>{
            const resultOfRead = epcs.length - serials.length;
            serials.forEach((serial)=>{
              const art = laundries.find((elem) => {
                return elem.rfidid ===serial.articulo_id
              });
              const complex = complexes.find((elem)=>{
                return elem.rfidId === serial.cliente_id;
              })
              const artName = art.name;
              const complexName =complex.name;
              serialsReadedToPackage.push({art});
              serialsReaded.push({artName,complexName});
              console.log(serialsReaded);
            });
            let serialsFiltered = Object.values(serialsReaded.reduce((a,{artName,complexName}) => {
              let key = `${artName}_${complexName}`;
              a[key] = a[key] || {count : 0, artName, complexName};
              a[key].count++;
              return a;
            }, {}));
            //Creamos el paquete:
            const linen = [];
            const serialFilteredWithId = serialsFiltered.map((serialx)=>{
              const laundryId = laundries.find(l => l.name === serialx.artName);
              const article = {laundrId: laundryId._id, amount: serialx.count}
              return article
            });
            console.log(serialFilteredWithId, 'linentosave');
            PackageModel.create({linen, shipping: shippingId,  estado: 'abierto'})
            .then(()=>{
              const dataReaded = [{serialsFiltered,resultOfRead}]; 
              res.status(200).json(dataReaded);
            })

          })
        })
    })
})

router.post(`/rfid/shipping/new`,(req,res) =>{
  const {arch} = req.body;
  console.log(req.body)
  console.log(arch)
  ArchModel.find({archNumber: req.body[0]}) //C#
  .then((result) =>{
    const {_id, complex} = result[0];
    ShippingModel.create({arch:_id, complex: complex})
    .then((newShipping)=>{
      res.status(200).json([newShipping]); //Array debido a C#
    })
  })
})

router.post(`/rfid/shipping/update`,(req,res) =>{
  const {shippingId,numberOfPackages} = req.body;
  console.log(req.body)
  const fechacierre = new Date;
  ShippingModel.findOneAndUpdate({_id: shippingId},{totalbultos:numberOfPackages, fechacierre: fechacierre, estado: 'cerrado'})
  .then((shippingRes) =>{
    res.status(200).json([shippingRes]);
  })
})

router.post(`/rfid/arch/new/:id`,(req,res) =>{
  const id = req.params.id;
  const {archNumber} = req.body;
  ArchModel.create({complex:id, archNumber: archNumber })
    .then((arch)=>{
      res.status(200).json(arch);
    })
})

module.exports = router;
