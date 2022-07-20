import {useState} from 'react'
import SearchBar from './components/serachBar';

const people = [
  {
    id:'people-01',
    title: 'Juan Perez',
  },
  {
    id: 'people-02',
    title: 'Marcos Rivas',
  },
  {
    id: 'people-03',
    title: 'Sergio Martinez',
  },
  {
    id:'people-04',
    title: 'Laura Jimenez',
  },
  {
    id: 'people-05',
    title: 'Horacio Martinez',
  },
]
const calendar = [
  {
    id:'calendar-01',
    title: 'Revision de pendientes con cliente',
  },
  {
    id: 'calendar-02',
    title: 'Sesion de seguimiento',
  },
  {
    id: 'calendar-03',
    title: 'Revision de propuestas',
  },
  {
    id:'calendar-04',
    title: 'Evento para donar juguetes',
  },
  {
    id: 'calendar-05',
    title: 'Junta semanal del equipo',
  },
]

const emails = [
  {
    id:'email-01',
    title: 'Reporte de resultados',
  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio',
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad',
  },
  {
    id:'email-04',
    title: 'Proximos eventos',
  },
  {
    id: 'email-05',
    title: 'Participa en la encuesta',
  },
]


function App() {

  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption]= useState('all')

    function handleClick(e){
      const op = e.target.name;

      switch(op){
        
        case 'all':
          setData([...people, ...calendar, ...emails])
          setCurrentOption('all');
          break;
        case 'people':
          setData([...people])
          setCurrentOption('people');
          break;
        case 'calendar':
          setData([...calendar])
          setCurrentOption('calendar');
          break;
        case 'emails':
          setData([...emails])
          setCurrentOption('emails');
          break;

        default:
      }
    }

  return (
    <div>
      <button onClick={handleClick} name='all'>All</button>
      <button onClick={handleClick} name='people'>People</button>
      <button onClick={handleClick} name='calendar'>Calendar</button>
      <button onClick={handleClick} name='emails'>Emails</button>
    */ borrar este comentario mas tarde/*
      <SearchBar items={data} onItemSelected={()=>{}}/>
    
    </div>
  );
}

export default App;
