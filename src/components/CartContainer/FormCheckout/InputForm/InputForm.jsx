const InputForm = (props) => {
  return (
      <>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{props.name.toUpperCase()}</span>
            </label>
            <input type="text" value={props.value} 
            onChange={props.onChange} name={props.name} className="input input-bordered w-full max-w-xs" />
        </div>
      </>
  )
}
export default InputForm