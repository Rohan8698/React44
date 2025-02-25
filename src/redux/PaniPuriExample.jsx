import React from 'react'
import { buyPaniPuri } from '../redux/cakeexample/cakeActions'
import { connect } from 'react-redux';

const PaniPuriExample = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>Number of Pani puris : {props.numOfPaniPuris}</h1>
            <button onClick={props.xyz}>Buy pani puri</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfPaniPuris: state.numOfPaniPuris
    }
}

const mapDispatchToProps = dispatch => {
    return {

        xyz: ()=>dispatch(buyPaniaPuri())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaniPuriExample)