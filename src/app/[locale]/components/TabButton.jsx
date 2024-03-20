
const TabButton = ({active,selectTab,children}) => {

  const buttonClasses = active ? "text-red-500 border-b border-purple-500" :"text-black "
  return (
  <button className="mr-3" onClick={selectTab} >
  
  
  
  
  <p className={`mr-3 font-semibold  ${buttonClasses}`}>
  {children}
  </p>
  </button>
  )
};

export default TabButton
