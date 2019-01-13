import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
const state = filtersReducer(undefined, { type: 'SORT_BY _DATE'});
expect(state.sortBy).toBe('date');
});

// date test by default

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
});

// should set text filter

test('should set text filter', () => {
 const text = 'This in my text filter';
 const action = {
     type: 'SET_TEXT_FILTER',
     text
 };
 const state = filtersReducer(undefined, action)
 expect(state.text).toBe(text)
});
// should set start date filter
test('should set start date filter', () => {
 const startDate = moment();
 const action = {
     type: 'SET_START_DATE',
     startDate
 };
 const state = filtersReducer(undefined, action);
 expect(state.startDate).toEqual(startDate)
});
// should set end date filter
test('should set end date filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
   });