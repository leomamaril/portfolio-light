function Circle({ color }) {
  return (
    <div className="d-flex flex-column justify-content-center me-3">
      <svg
        height="70"
        width="70"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <circle r="30" cx="35" cy="35" fill={color} />
      </svg>
      <span className="text-center">{color}</span>
    </div>
  );
}

export {Circle}