import { connect } from 'react-redux';
import {incrementLikes, decrementLikes} from './redux/actions'

function Likes(props){
    return (
        <div className='button-controls'>
            <button onClick={props.OnIncrementLikes}> ♥ {props.likes}</button>
            <button onClick={props.OnDecrementLikes}>Dislike </button>
        </div>
    )
}

function mapStateToProps(state){
    const {likesReducer} = state;
    return{
        likes: likesReducer.likes
        
    }
}

function mapDispatchToProps(dispatch){
    return{
        OnIncrementLikes: () => {
            return dispatch(incrementLikes());
        },

        OnDecrementLikes: () => {
            return dispatch(decrementLikes());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Likes);