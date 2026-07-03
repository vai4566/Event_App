const express=require('express')
const mongoose=require('mongoose')
const Event=require('./models/event')

const app=express()
 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


 app.get('/',(req,res)=>{
  Event.find()
    .then((result) => {
      res.render('index', { title: 'All event', events: result })
    })
    .catch((err) => {
      console.error(err); 
  })
 })

 app.get('/event/:id', (req, res) => {
    const id = req.params.id;

    Event.findById(id)
        .then((result) => {
          console.log(result)
            res.render('partial/event', { event: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/EventForm', (req,res)=>{
   res.render('partial/form')
})

app.post('/EventForm', (req, res) => {
   console.log(req.body)
  const event = new Event(req.body);
  event.save()
    .then((result) => {
      console.log(result)
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
    });
});


 const dbUrl='mongodb://localhost:27017/Event'
 mongoose.connect(dbUrl)
 .then(()=>{
    console.log("MongoDB Database Connected Sucessfully")
     app.listen(3000,()=>{
    console.log("server is running successfully")
 })
 })
 .catch((err)=>{
console.error('404 could not connected to MongoDB:', err)
 })