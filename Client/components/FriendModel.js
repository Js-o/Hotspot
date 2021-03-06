import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';






var friendEndpoints={
  accept:'/api/confirmFriend',
  decline:'/api/rejectFriend'
}

 class FriendModel extends React.Component  {
  //console.log('you should see a friend!');
  constructor(props){
    super(props)
  }

accept(person){
  var that=this;
$.post(friendEndpoints.accept,{ friendname:person },function(a,b){
  console.log('accept request!!',a,'error(?):',b);
  that.props.actions.fetchFriendRequests();
    console.log('the new store!:',that.props.friendRequestsLower);

});

 }


decline(person){
  var that=this;
$.post(friendEndpoints.decline,{ friendname:person },function(a,b){
  console.log('decline request!!',a,'error(?):',b);
  that.props.actions.fetchFriendRequests();
});

 }


  render(){
    var that=this;
 
    return (
  <div>
     {this.props.item.requestor}
    <button onClick={function(){that.accept(that.props.item.requestor)}}>Accept</button>
    <button onClick={function(){that.decline(that.props.item.requestor)}}>Decline</button>
  </div>
  );
 }
};



function mapStateToProps(state) {
  return {
    friendRequestsLower:state.FriendReqs.friendReqs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


 export default connect(mapStateToProps, mapDispatchToProps)(FriendModel);

