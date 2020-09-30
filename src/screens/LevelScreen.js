import React, { Component } from 'react';
import {connect} from 'react-redux'
import  {AddLevel, Table} from '../components/Level'
import {Grid, } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import TotalLevel from '../components/Dashboard/components/TotalLevel';
 
class LevelScreen extends Component {
    state={
        level:0,
        loading:false,
        department:''
    }
    componentDidMount(){
      this.props.fetchAllLevels()
      this.props.fetchAllDepartment()
  }
    render() { 
        return (
          <Grid
           container
           spacing={5}
          >
           <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                  <Description screenName="Level"/>
                </Grid>
                <Grid
                 item
                lg={8}
                sm={8}
                xl={8}
                xs={8}
                >
                  <TotalLevel levels={this.props.levels.allLevels}/>
                </Grid>
                <Grid
                 item
                lg={4}
                sm={4}
                xl={4}
                xs={4}
                >
                  <AddLevel

                  />
                </Grid>
                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                  <Table data={this.props.levels.allLevels}/>
                </Grid>
          </Grid>
        );
    }
}
 
function mapStateToProps(state) {
    return {
      departments:state.departments,
      levels:state.levels
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchAllLevels: () => {
        dispatch(actions.fetchAllLevels())
      },
      addLevel:(data)=>{
        dispatch(actions.addLevel(data))
      },
      fetchAllDepartment: ()=>{
        dispatch(actions.fetchAllDepartment())
      }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps )(LevelScreen);