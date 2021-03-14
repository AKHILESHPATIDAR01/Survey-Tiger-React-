
const Published = ({ squestions }) => {
    return(
        <>
            <div className="mt-5 text-left">
                {squestions.length > 0 ? squestions.map((q,key)=>(
                    // return (
                        <div key={key}>
                            <h3 className="my-3">{q.text}</h3>
                            
                            {q.options.map((opt) => (
                                // return (
                                    q.qtype === 1 ?
                                    <div className="form-check" key={opt.uid}>
                                        <lable className="form-check-lable">
                                            <input type="checkbox" className="form-check-input" value="" /> {opt.value}
                                        </lable>
                                    </div>
                                    :
                                    <div className="form-check" key={opt.uid}>
                                        <lable className="form-check-lable">
                                            <input type="radio" className="form-check-input" name="random" value="" /> {opt.value}
                                        </lable>
                                    </div>
                                // );

                            ))}

                        </div>

                    // );

                )) 
                : <div className="text-center"><h2>No question Added</h2></div> }

                {squestions.length !== 0 ? 
                    <div className="text-centre">
                        <button className="btn btn-primary">Confirm</button>
                    </div>
                    : null
                }

            </div>
        </>
    )
}

export default Published;