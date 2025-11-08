const express = require("express")
const app = express()
const port = process.env.PORT || 8080
app.set("view engine", "ejs")



const songs =[
  {SongName:"Fly me to the moon",artist:"Tony Bennett",SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XDeoJMWsChGY9RA2CxGzX4PMlpjUWoVVuQ&s",Favorited:false},
  {SongName:"Do not Disturb",artist:"Drake",SongImage:"https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",Favorited:false},
  {SongName:"Fire and Desire ",artist:"Drake",SongImage:"https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",Favorited:false},
  {SongName:"Passion Fruit ",artist:"Drake",SongImage:"https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",Favorited:false},
  {SongName:"Gold Roses ",artist:"Rick Ross",SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhszd32mCy0JDVAwkRwNLZqACiBk223GjrQ&s",Favorited:false},
  {SongName:"Heartless",artist:"Kanye West",SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZPkePbZ3biEwQ7V-cOpP0IBlwc4wCZYXJQ&s",Favorited:false}
]




app.get("/", (req,res) => {
  return res.render('example', { songs: songs });
})


app.get("/playlist", (req,res) => {
  
  let temp = []
  
  for(let i = 0; i < 3; i++){
  const random = Math.floor(Math.random() * (songs.length));
  temp.push(songs[random])
  }

  return res.render('playlist', { playlist :temp });
})

app.get("/favorites/:x", (req,res) => {
  
  const value = parseInt(req.params.x)

  if(songs[value].Favorited === false){

      songs[value].Favorited =true
      return res.redirect("/")
    
  }else {
    return res.send("ERROR: This song is already favorited")
    
  }
})



const startServer = () => {
  console.log(`The server is running on http://localhost:${port}`)
  console.log(`Press CTRL + C to exit`)
}
app.listen(port, startServer)