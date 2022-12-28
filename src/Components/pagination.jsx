function Pagination({ current, onChange }) {
  return (
    <>
      <button disabled={current === 1} onClick={() => onChange(-1)}>
        Previous
      </button>
      <button disabled>{current}</button>
      <button disabled={current === 10} onClick={() => onChange(+1)}>
        Next
      </button>
    </>
  );
}
export default Pagination;
