const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {/* <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div> */}
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card w-[200px] h-52 m-4 bg-gray-200 border-2 border-gray-300"></div>
        ))}
    </div>
  )
}

export default Shimmer;