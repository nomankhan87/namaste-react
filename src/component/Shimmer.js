const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div> */}
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  )
}

export default Shimmer;