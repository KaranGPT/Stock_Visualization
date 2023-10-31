import { STOCK_TIME_SERIES_DAILY, STOCK_TIME_SERIES_WEEKLY,
    STOCK_TIME_SERIES_MONTHLY, MULTIPLE_STOCKS_SERIES_MONTHLY } from "../actions/highcharts-action-types";
    
    
const initialState = {
    dailyStocks: {},
    weeklyStocks: {},
    monthlyStocks: {},
    monthlyStocksSeries: []
}
    
export default function(state = initialState, action){
    switch(action.type){
        case STOCK_TIME_SERIES_DAILY:
            state = {
                ...state,
                dailyStocks: action.payload

            }
            break;

        case STOCK_TIME_SERIES_WEEKLY:
            state = {
                ...state,
                weeklyStocks: action.payload

            }
            break;
            
        case STOCK_TIME_SERIES_MONTHLY:
            state = {
                ...state,
                monthlyStocks: action.payload
    
            }
            break;

        case MULTIPLE_STOCKS_SERIES_MONTHLY:
            state = {
                ...state,
                monthlyStocksSeries: action.payload
    
            }
            break;


    }
    return state;

}