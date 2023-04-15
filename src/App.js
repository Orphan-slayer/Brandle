import { useEffect, useState, useRef } from 'react';
import React from 'react';
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// json-server ./src/DataBase.json --port 3001
function App() {

  //getting the Data from the Json file
  const[Solution, SetSolution] = useState(null)
  const[ImgSol, SetImgSolution] = useState(null)
  const[BWImgSol, SetBW] = useState(null)
  const[Img, setImg] = useState(null)

  //recording data while the app runs
  const [turns, SetTurns] = useState(1)
  const[goodJob, judge] = useState(null)
  const[value, setValue] = useState(null)

  //switching images
  const nully = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIBJREFUWEftlyESgDAMBMlbMP0gNQwIGEz5YE3fApNAMAwyCeIwdex2VY+66zvu0/sgUvi0ZFf4OhfhiYDCa20uEin1wmGJR0DhZdtNJfI4yP9Z4iVgDdebsQQEUAAFUAAFUAAFUAAFUAAF/lmA3+3W2+BzmDA8bJoxPHKchs7zE7sEHBKT9S5kAAAAAElFTkSuQmCC'
  const x = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAUBJREFUWEfVl7ERwjAMRZMNUrABTTaAjgno6NmCDgro2IKejgnoYIM0bECRDeDkoJwv2Ja+DztHmtwl0f/PiqVEZdEdr88596ks2Xy732Q1P+yOxs8AsHnTPLJA1PXU+BBED8Dmi/MlKcR1tTT6BPEFkNqcV0YQIsC6qvpMnNo2Kis+DRGAAp/3W286mc0LFCKkAQMQCQIxNB/GRwFoIVzmMAAFaISGG0MbI2aAhbWCKLAaQCuMgJImBCBB0H27Yjh7oU0LA4QgXA1CqpgoAC2EZB71CuxV+t63tkz/GyC0es3mgz5G2iaTZROG6jx5GWqajOYZO1PqMkSEkWdVAIgg+u0QAWLMEYgoAE2HC0HY8TAAYu6DgAC477MY+j9oQ7g0xAy4mssvr3kByCT1bOAdTMh8tNGMzMccTsl/tPH8DeDZ7hK0UsDiAAAAAElFTkSuQmCC'
  const check = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAASRJREFUWEfll6EOwjAQQDeLxiEJyQSfgCP8Bp+BAwGOz+A3CI5PQCwhSBway3KFI0u79u7WXSdWU7Gt7/Wu7Xp59m2fX5+6y3OEb/ebpPDD7mh4RgDhZflIIlEUU8MBib8Awm+zi6rE/L4044OEI6ANx5mBxDAExqtR9jq/nZQmiQDAT5Nrtn4uHAl1AYTj1G0JVQEb3iShJsCBg5CKABeuIiCBdy4ghYsEfPsYF1YbOFsgtI9hkLZwlgC1j2PgpAA1OPWc8yslt2EIAser3ZqO25AIKRDKcSycTEEd4IuE74znhF8kELvafUKsFIQiIc25LSIWqEciFi5OgR2JphsON/fDuxN2tgilIabe9y5C+FC7NvAWJgDvrTQDeJ/FKfB7K88ra/egEk4PXzwAAAAASUVORK5CYIIA'
  const[img1, setImg1] = useState(nully)
  const[img2, setImg2] = useState(nully)
  const[img3, setImg3] = useState(nully)
  const[didit, Didya] = useState(false)
  
  const Brands = [
		{name: "Subway",},{name: "Microsoft 2001",},{name: "Apple",},{name:"Heinz",},{name:"Kraft",},{name:"Linux",},{name:"Mug Root Beer",},{name:"Microsoft 2016",},{name:"Pepsi",},{name:"Pepsi 1969",},{name:"Tropicana",},
	];
 
  const handleChange = (string, results) => {
    console.log(string, results)
    setValue(string)
}
const handleOnSelect = (item) => {
  
  setValue(item.name)
}
  const click = (event) => {
    event.preventDefault()
    if (Solution === value && turns <= 3){
      SetBW(ImgSol)
      console.log("yeah")
      judge("Good job!")
    }
    if(didit === false){
      SetTurns(turns + 1)
      console.log(turns)
      if (turns === 1){
        setImg1(x)
        if(Solution === value){
          setImg1(check)
          Didya(true)
        }
      }
      if (turns === 2){
        setImg2(x)
        if(Solution === value){
          setImg2(check)
          Didya(true)
        }
      }
      if (turns === 3){
        setImg3(x)
        if(Solution === value){
          setImg3(check)
          Didya(true)
        }
        else{
          judge("it was " + Solution)
          SetBW(ImgSol)
        }
      } 
    }
  }
  useEffect(() => {
    fetch(' http://localhost:3001/Solutions')
    .then(res => res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      SetBW(randomSolution.BWpic)
      SetImgSolution(randomSolution.pic)
      SetSolution(randomSolution.word)
      console.log(randomSolution)
      console.log(Img)
      
    })
  }, [SetImgSolution], [SetSolution],[SetBW], [setImg])
  return(
    
    <div className='App'>
      <form action=''>
      <img class="Brandle" src="data:image/png;base64,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"></img>
      <div><img class="Brand" src={BWImgSol}></img> </div>
      <div><img class='icon' src={img1}/><img class='icon' src={img2}/><img class='icon' src={img3}/></div>
      <ReactSearchAutocomplete items={Brands} onSearch={handleChange} onSelect={handleOnSelect} styling={{
              height: "50px",
              width: "200px",
              border: "4px solid light grey",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              color: "grey",
              fontSize: "26px",
              lineColor: "grey",
              clearIconMargin: "3px 8px 0 0",
            }}/>
    <button onClick={click}>Guess</button>
      <div>{goodJob}</div>
      </form>
    </div>

  )
}

export default App;