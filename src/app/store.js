import { configureStore } from '@reduxjs/toolkit'
import { countryReducer, companyReducer, serviceReducer, questionReducer, sectionReducer, sectionNameReducer } from "../slices"
export const store = configureStore({
    reducer: {
        'country': countryReducer,
        'company': companyReducer,
        'service': serviceReducer,
        'question': questionReducer,
        'section': sectionReducer,
        'sectionName': sectionNameReducer,
    },
    
})
