import { pagix } from 'pagix';
import {Button, Div} from './style.js'


const Page = ({ idx, active, onChange }) => {
    const handleClick = () => onChange(idx)

    return (
        <Button onClick={handleClick} style= {{background: active ? "#6D2080" : "#FFFFFF", color: active ? "white" : "#8D8D8D"}} >
            {idx}
        </Button>
    )
}

export const Paginate = ({ records, limit, current, delta, fixed, onChange }) => {
    const { total, start, end, middle, prev, next, from, to } = pagix ({ 
        records, 
        limit, 
        current, 
        delta, 
        fixed, 
        onChange 
    })

    console.log('start', start)
    console.log('end', end)
    
    const goToPrev = () => onChange(prev)
    const goToNext = () => onChange(next)

    return (
        <Div> 
            
            {start && start[0] !== current && (<Button onClick= {() => onChange(current - 1)}> {`<`} </Button>)}

            {start.map(idx => (
                <Page idx={idx} active= {current === idx} onChange= {onChange} />
            ))}

            {prev && (<Button onClick= {goToPrev}> ... </Button>)}

            {middle.map(idx => (
                <Page idx={idx} active= {current === idx} onChange= {onChange} />
            ))}

            {next && (<Button onClick= {goToNext} > ... </Button>)}

            {end.map(idx => (
                <Page idx={idx} active= {current === idx} onChange= {onChange} />
            ))}

            {end && end.length !== 0 && end[0] !== current  && (<Button onClick= {() => onChange(current + 1)} > {`>`} </Button>)}
        </Div>
    )
}