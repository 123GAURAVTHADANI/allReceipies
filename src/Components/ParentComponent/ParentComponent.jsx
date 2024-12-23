function ParentComponent({ children, bgColor, fontSize, color }) {
  // Children Props
  console.log(">parent children", children);
  return (
    <div style={{ color: color, backgroundColor: bgColor, fontSize: fontSize }}>
      Parent Component
      {children}
    </div>
  );
}
export default ParentComponent;
