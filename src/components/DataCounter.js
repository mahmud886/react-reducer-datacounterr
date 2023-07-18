import React, { useReducer } from 'react';

const initalState = { count: 0, step: 1 };

const reducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'handleIncrement':
            return { ...state, count: state.count + state.step };
        case 'handleDecrement':
            return { ...state, count: state.count - state.step };
        case 'setCount':
            return { ...state, count: action.payload };
        case 'setStep':
            return { ...state, step: action.payload };
        case 'reset':
            return initalState;

        default:
            throw new Error('Unknown actions..!');
    }
};

const DataCounter = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    const { count, step } = state;

    const date = new Date('july 18 2023');
    date.setDate(date.getDate() + count);

    const handleIncrement = () => {
        dispatch({ type: 'handleIncrement' });
    };
    const handleDecrement = () => {
        dispatch({ type: 'handleDecrement' });
    };
    const handleDefineCount = (e) => {
        dispatch({ type: 'setCount', payload: Number(e.target.value) });
    };
    const handleDefineStep = (e) => {
        dispatch({ type: 'setStep', payload: Number(e.target.value) });
    };

    const reset = () => {
        dispatch({ type: 'reset' });
    };

    return (
        <>
            <div className='counter'>
                <div>
                    <input
                        type='range'
                        min='0'
                        max='10'
                        value={step}
                        onChange={handleDefineStep}
                    />
                    <span>{step}</span>
                </div>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <input
                        type='text'
                        value={count}
                        onChange={handleDefineCount}
                    />
                    <button onClick={handleIncrement}>+</button>
                </div>
                <p>{date.toDateString()}</p>

                <div>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default DataCounter;
