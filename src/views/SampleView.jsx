import React from 'React'

const SampleView = (props) => {
    return (
        <div id="fillThis" className={props.visibility ? '' : 'hide'}>
        </div>
    )
}

export default SampleView
