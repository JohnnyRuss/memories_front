export default function FileField({ value, onChange }) {
  return (
    <div className="post-form__file-field">
      <label htmlFor="image">Select File</label>

      {value && (
        <figure>
          <img src={value} alt="post_media" />
        </figure>
      )}

      <input
        type="file"
        id="image"
        accept="image/*"
        multiple={false}
        onChange={onChange}
        hidden
      />
    </div>
  );
}
