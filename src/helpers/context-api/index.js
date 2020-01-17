import React from 'react'

const TemplateContext = React.createContext({})

export const TemplateProvider = TemplateContext.Provider
export const TemplateConsumer = TemplateContext.Consumer
export default TemplateContext;