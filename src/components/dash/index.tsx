import './dash.css'

interface DashProps {
    width?: string | number;
  }
  
function Dash ({ width } : DashProps) {
    const dashStyle = {
      width: typeof width === 'number' ? `${width}px` : width
    };
  
    return <div className="dash" style={dashStyle}></div>;
  };
  
export default Dash;