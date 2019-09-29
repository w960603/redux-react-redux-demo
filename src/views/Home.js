import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ADD,REDUCE} from '@/redux/actions/action1'
import {ADD_MSG,DEL_MSG} from '@/redux/actions/action2'

class Home extends Component {
  state={
    msg:'',
  }
  onInput=(e)=>{
    this.setState({
      msg:e.target.value
    })
  }
  addMsg = ()=>{
    const msg = {
      msg:this.state.msg
    }
  this.props.addMsg(msg)
    this.setState({
      msg:''
    })
  }
  delMsg = (msg)=>{
    this.props.delMsg(msg)
  }
  render() {
    return (
      <div>
        <p>{this.props.num}</p>
        <button onClick={this.props.addNum}>加一</button>
        <button onClick={this.props.reduceNum}>减一</button>

        {
          this.props.msg.map(item=>{
            return (
              <p onClick={this.props.delMsg.bind(this,item)} key={item.msg}>{item.msg}</p>
            )
          })
        }

        <input type="text" value={this.state.msg} onChange={(e)=>this.onInput(e)}/>
        <button onClick={this.addMsg}>添加一条消息</button>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  console.log(state);
  return {
    num: state.num,
    msg:state.msg
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  console.log(ownProps);
  return{
    addNum: ()=>dispatch(ADD),
    reduceNum: ()=>dispatch(REDUCE),
    addMsg: (msg)=>dispatch(ADD_MSG(msg)),
    delMsg: (msg)=>dispatch(DEL_MSG(msg))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
