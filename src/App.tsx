import React, {useState} from 'react';
import { Circle } from './components/Circle';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import './App.css';

type TCircle  = {
    x: number,
    y: number,
    id: string,
}

const App = () => {
    const initialDots: TCircle | [] = [];
    const [dots, setDots] = useState<TCircle[]>(initialDots);

    const handleCreateCircle = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target instanceof HTMLButtonElement)) {
            return;
        }

        if ((e.target as Element).classList.contains('circle') ) {
            return;
        }


        setDots([
            ...dots,
            {
                x: e.pageX,
                y: e.pageY,
                id: uuidv4(),
            }
        ])
    }

    const handleRemoveCircle = () => {
      const last = dots.at(-1);
      if (last) {
          const updatedDots = dots.filter(({id}) => id !== last.id);
          setDots(updatedDots);
      }
    }
    const handleRemoveAllCircles = () => setDots(initialDots);
    const btnClasses = cn('btn', {
        'btn-disabled': dots.length < 1,
    })

    return (
          <div onClick={handleCreateCircle} className="App">
              <button disabled={dots.length < 1} onClick={handleRemoveCircle} data-btn={'btn'} className={btnClasses}>undo</button>
              <button disabled={dots.length < 1} onClick={handleRemoveAllCircles} data-btn={'btn'}  className={btnClasses} >undo All</button>
              {
                  dots.length > 0 && dots.map(({id, x, y}) => {
                      return <Circle key={id} x={x} y={y} />
                  })
              }
          </div>
  );
}

export default App;
