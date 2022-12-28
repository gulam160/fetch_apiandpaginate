export default function PostItem({ Id, Title, Body }) {
  return (
    <div>
      <h3>
        {Id}. {Title}
      </h3>
      <p>{Body}</p>
    </div>
  );
}
