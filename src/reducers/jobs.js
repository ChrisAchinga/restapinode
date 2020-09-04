const jobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return action.jobs;
        case 'LOAD_MORE_JOBS':
            return [...state, ...action.jobs];
        default:
            return state;
    }
};

export default jobsReducer;

// In this file, we are adding the new jobs data coming from API in redux using SET_JOBS action and using LOAD_MORE_JOBS action we are getting more jobs and adding it to already existing jobs array using the spread operator.
// [...state, ...action.jobs]