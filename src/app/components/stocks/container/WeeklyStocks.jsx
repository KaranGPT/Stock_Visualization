import React, { Component } from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

import { getWeeklyStocksTimeSeries } from "../../../actions/stock-actions";

import getSeriesData from "../../../utilities/global-functions.js";

class WeeklyStocks extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getWeeklyStocksTimeSeries("AAPL");
  }
  render() {
    if (this.props.weeklyStocks) {
      const stockSeriesData = getSeriesData(
        this.props.weeklyStocks["Weekly Time Series"]
      );
      const options = {
        title: {
          text: "Weekly Stocks of AAPL",
        },
        rangeSelector: {
          selected: 6,
        },
        series: [
          {
            name: "AAPL",
            data: stockSeriesData,
          },
        ],
      };
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
        </div>
      );
    } else {
      return <h5>Loading...</h5>;
    }
  }
}

WeeklyStocks.propTypes = {
  weeklyStocks: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  weeklyStocks: state.stockReducer.weeklyStocks,
});
export default connect(mapStateToProps, { getWeeklyStocksTimeSeries })(
  WeeklyStocks
);
