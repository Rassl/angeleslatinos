import React from 'react';
import { useCountUp } from 'react-countup';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* border: 1px solid #fff;
    height: 200px; */
    /* width: 25%; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
    align-self: 'center';
    .value {
        font-size: 40px;
        &:after {
            content: '+';
            display: inline;
        }
    }
    .text {
        text-align: center;
    }
`;

const CompleteHook = ({ end = 1234567, text }) => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: end,
        delay: 0,
        duration: 2,
        onReset: () => console.log('Resetted!'),
        onUpdate: () => console.log('Updated!'),
        onPauseResume: () => console.log('Paused or resumed!'),
        onStart: ({ pauseResume }) => console.log(pauseResume),
        onEnd: ({ pauseResume }) => console.log(pauseResume),
    });
    return (
        <Wrapper>
            <div className='value' ref={countUpRef} />
            <div className="text">{text}</div>
            {/* <button onClick={() => update(2000)}>Update to 2000</button> */}
        </Wrapper>
    );
};

export default CompleteHook;
