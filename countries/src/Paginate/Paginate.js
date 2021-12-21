import { pagix } from 'pagix';

const Page = ({ idx, active, onChange }) => {
    const handleClick = () => onChange(idx)

    return (
        <button onClick={handleClick}>
            {idx}
        </button>
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

    console.log({ total, start, end, middle, prev, next, from, to })

    const goToPrev = () => onChange(prev)
    const goToNext = () => onChange(next)

    return (
        <> 
            <div flex={1}>
                <text>
                    Showing <strong>{from}</strong>-<strong>{to}</strong> of {records}
                </text>
            </div>
            
            {start.map(idx => (
                <Page idx={idx} active= {current === idx} onChange= {onChange} />
            ))}

            {prev && (<button onClick= {goToPrev}> ... </button>)}

            {middle.map(idx => (
                <Page idx={idx} active= {current === idx} onChange= {onChange} />
            ))}

            {next && (<button onClick= {goToNext} > ... </button>)}

            {end.map(idx => (
                <Page idx={idx} active= {current === idx} onChange= {onChange} />
            ))}
        </>
    )
}