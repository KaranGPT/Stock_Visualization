import React, { Component } from 'react';
import {connect} from "react-redux";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

import {getMonthlyStocksForComparison} from "../../../actions/stock-actions";

import getSeriesData from "../../../utilities/global-functions.js";

class MonthlyStocksComparison extends Component {
    constructor(props){
        super(props);
        this.state = {
            stocksOf : ["AAPL", "GOOGL", "MSFT"]
        }
    }
    componentDidMount(){
        this.props.getMonthlyStocksForComparison(...this.state.stocksOf);
    }
  render() {
    let seriesOptions=[];
    for(let i = 0; i < this.props.monthlyStocks.length; i++){
        const stock = this.props.monthlyStocks[i];
        seriesOptions[i] = {
            name: this.state.stocksOf[i],
            data: getSeriesData(stock["Monthly Time Series"])
        }
    }
    if(this.props.monthlyStocks.length > 0){
        
        const options = {
            title : {
                text: `Monthly Stocks of - ${this.state.stocksOf}`
            },
            rangeSelector: {
                selected: 6
            },
            
            series: seriesOptions
        }
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType = {"stockChart"}
                    options = {options}
                />
            </div>
          )
        
    }
    else{
        return <h5>Loading...</h5>
    }
    
  }
}

MonthlyStocksComparison.propTypes = {
    monthlyStocks: PropTypes.array.isRequired 
}

const mapStateToProps = state => ({
    monthlyStocks: state.stockReducer.monthlyStocksSeries
})
export default connect(mapStateToProps, {getMonthlyStocksForComparison})(MonthlyStocksComparison);