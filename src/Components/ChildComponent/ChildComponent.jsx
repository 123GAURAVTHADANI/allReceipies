function ChildComponent({ children, color }) {
  console.log("children", children);
  return <div style={{ color: color }}>Child COmponent</div>;
}
export default ChildComponent;
