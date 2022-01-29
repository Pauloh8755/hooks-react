import React from 'react'

export const data = {
    number: 123,
    text: 'Contex API ...'
}

const DataContext = React.createContext(data)
export default DataContext