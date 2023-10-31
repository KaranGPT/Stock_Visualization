import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import HighchartsStore from "./store/highcharts-store";
import MainLayout from "./MainLayout";

export default class RootComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={HighchartsStore}>
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </Provider>
        );
    }
}